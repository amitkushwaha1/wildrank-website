Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# --- source logo (163x60, transparent bg), W-mark bbox = x12..51, y16..43 ---
$srcPath = Join-Path $root "public\logo.png"
$src = New-Object System.Drawing.Bitmap($srcPath)
$crop = $src.Clone((New-Object System.Drawing.Rectangle(12,16,40,28)), $src.PixelFormat)
$src.Dispose()

# $bgColor = $null => transparent; otherwise a solid System.Drawing.Color.
function New-IconBitmap([int]$size, [double]$padPct, $bgColor) {
  $fmt = [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  $b = New-Object System.Drawing.Bitmap($size, $size, $fmt)
  $g = [System.Drawing.Graphics]::FromImage($b)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  if ($null -ne $bgColor) {
    # solid background (used for app/home-screen icons so they don't turn black)
    $brush = New-Object System.Drawing.SolidBrush($bgColor)
    $g.FillRectangle($brush, 0, 0, $size, $size)
    $brush.Dispose()
  }
  # else: leave fully transparent (browser-tab favicons adapt to light/dark toolbars)

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

$white = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)

# --- PNG assets ---
# Browser-tab favicon: transparent background (no dark tile).
Save-Png (New-IconBitmap 64 26 $null)  (Join-Path $root "app\icon.png")
# App/home-screen icons: solid white background so iOS doesn't render them on black.
Save-Png (New-IconBitmap 180 24 $white) (Join-Path $root "app\apple-icon.png")
Save-Png (New-IconBitmap 512 24 $white) (Join-Path $root "public\icon-512.png")

# favicon.ico is generated separately (multi-size) from the transparent mark;
# see scripts or regenerate with ImageMagick from app\icon.png at 16/32/48.
