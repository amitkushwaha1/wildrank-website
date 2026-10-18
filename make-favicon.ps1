Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# --- source: the LIGHT-surface wordmark (public/logo-on-light.png, 400x80).
#     Its "W" mark is orange + black, matching the logo shown on the site and
#     on LinkedIn. The mark occupies x 0..124, y 0..79.
$srcPath = Join-Path $root "public\logo-on-light.png"
$src = New-Object System.Drawing.Bitmap($srcPath)
$crop = $src.Clone((New-Object System.Drawing.Rectangle(0, 0, 125, 80)), $src.PixelFormat)
$src.Dispose()

function New-IconBitmap([int]$size, [double]$padPct) {
  # transparent background; just the W mark, centered and scaled to fit
  $b = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($b)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)

  # fit the 125x80 mark inside a padded box, preserving aspect ratio
  $inner = $size * (1 - $padPct / 100.0)
  $ratio = [Math]::Min($inner / 125.0, $inner / 80.0)
  $dw = [int]([Math]::Round(125 * $ratio))
  $dh = [int]([Math]::Round(80 * $ratio))
  $x = [int](($size - $dw) / 2)
  $y = [int](($size - $dh) / 2)
  $dst = New-Object System.Drawing.Rectangle($x, $y, $dw, $dh)
  $srcRect = New-Object System.Drawing.Rectangle(0, 0, 125, 80)
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

# --- PNG assets (transparent background) ---
Save-Png (New-IconBitmap 64 14)  (Join-Path $root "app\icon.png")
Save-Png (New-IconBitmap 180 18) (Join-Path $root "app\apple-icon.png")
Save-Png (New-IconBitmap 512 20) (Join-Path $root "public\icon-512.png")

# favicon.ico (16/32/48) is generated separately, e.g. with ImageMagick
# from app\icon.png, or by extending this script with a multi-size ICO writer.
# The mark is transparent; the black strokes rely on a light surrounding
# surface (browser tab / LinkedIn / white card).
