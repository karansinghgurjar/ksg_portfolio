$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$targets = Get-ChildItem -Directory -Filter "dist_local*" -ErrorAction SilentlyContinue
if (-not $targets) {
  Write-Host "No dist_local* folders found."
  exit 0
}

foreach ($dir in $targets) {
  try {
    attrib -R "$($dir.FullName)\*" /S /D 2>$null
    Remove-Item -Recurse -Force $dir.FullName
    Write-Host "Removed $($dir.Name)"
  } catch {
    Write-Warning "Could not remove $($dir.Name): $($_.Exception.Message)"
  }
}

Write-Host "Cleanup complete."
