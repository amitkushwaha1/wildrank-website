Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# --- source logo (163x60, transparent bg), W-mark bbox = x12..51, y16..43 ---
$srcPath = Join-Path $root "public\logo.png"
$src = New-Object System.Drawing.Bitmap($srcPath)
$crop = $src.Clone((New-Object System.Drawing.Rectangle(12,16,40,28)), $src.PixelFormat)
$src.Dispose()

function New-IconBitmap([int]$size, [double]$padPct) {
  $b = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($b)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  # rounded dark brand background (#18181b -> #0a0a0a), matching site theme
  $rad = [int]($size * 0.18)
  $w = $size; $h = $size; $d = $rad * 2
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $p.AddArc(0, 0, $d, $d, 180, 90)
  $p.AddArc($w - $d, 0, $d, $d, 270, 90)
  $p.AddArc($w - $d, $h - $d, $d, $d, 0, 90)
  $p.AddArc(0, $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()

  $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
  $c1 = [System.Drawing.Color]::FromArgb(255, 26, 26, 30)
  $c2 = [System.Drawing.Color]::FromArgb(255, 8, 8, 8)
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, [single]45)
  $g.FillPath($brush, $p)

  # centered W mark with padding
  $inner = $size * (1 - $padPct / 100.0)
  $ratio = [Math]::Min($inner / 40.0, $inner / 28.0)
  $dw = [int]([Math]::Round(40 * $ratio))
  $dh = [int]([Math]::Round(28 * $ratio))
  $x = [int](($size - $dw) / 2)
  $y = [int](($size - $dh) / 2)
  $dst = New-Object System.Drawing.Rectangle($x, $y, $dw, $dh)
  $srcRect = New-Object System.Drawing.Rectangle(0, 0, 40, 28)
  $g.DrawImage($crop, $dst, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

  $g.Dispose()
  return $b
}

function Save-Png([System.Drawing.Bitmap]$bmp, [string]$path) {
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  $f = Get-Item $path
  "OK  $($f.Name)  $($f.Length) bytes"
}

# --- PNG assets ---
Save-Png (New-IconBitmap 64 26)  (Join-Path $root "app\icon.png")
Save-Png (New-IconBitmap 180 24) (Join-Path $root "app\apple-icon.png")
Save-Png (New-IconBitmap 512 24) (Join-Path $root "public\icon-512.png")

# --- favicon.ico (PNG-encoded entries: 16, 32, 48) ---
$icoSizes = @(16, 32, 48)
$blobs = @()
foreach ($s in $icoSizes) {
  $pad = if ($s -le 16) { 18 } else { 24 }
  $bmp = New-IconBitmap $s $pad
  $ms = New-Object System.IO.MemoryStream
  $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  $blobs += ,@($s, $ms.ToArray())
  $ms.Dispose()
}

$icoPath = Join-Path $root "app\favicon.ico"
$fs = [System.IO.File]::Create($icoPath)
$bw = New-Object System.IO.BinaryWriter($fs)
$bw.Write([uint16]0)                 # reserved
$bw.Write([uint16]1)                 # type = icon
$bw.Write([uint16]$blobs.Count)      # count
$offset = 6 + (16 * $blobs.Count)
foreach ($e in $blobs) {
  $s = $e[0]; $data = $e[1]
  $dim = if ($s -ge 256) { 0 } else { [byte]$s }
  $bw.Write([byte]$dim)
  $bw.Write([byte]$dim)
  $bw.Write([byte]0)   # palette count
  $bw.Write([byte]0)   # reserved
  $bw.Write([uint16]1) # color planes
  $bw.Write([uint16]32)# bits per pixel
  $bw.Write([uint32]$data.Length)
  $bw.Write([uint32]$offset)
  $offset += $data.Length
}
foreach ($e in $blobs) { $bw.Write($e[1]) }
$bw.Flush()
$fs.Close()
$bw.Dispose()
"OK  favicon.ico  $((Get-Item $icoPath).Length) bytes"

$crop.Dispose()
"done"
