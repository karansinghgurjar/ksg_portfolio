$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$stamp = Get-Date -Format "yyyyMMdd_HHmmss"
$distDir = Join-Path $root ("dist_local_{0}" -f $stamp)

$assetsDir = Join-Path $distDir "assets"
New-Item -ItemType Directory -Path $assetsDir | Out-Null

$tempCss = Join-Path $root ("src/style.localbuild.{0}.css" -f ([guid]::NewGuid().ToString("N")))
$cssContent = (Get-Content -Raw "src/styles/globals.css") + "`r`n" + (Get-Content -Raw "src/styles/components.css")
Set-Content $tempCss $cssContent

npx tailwindcss -i $tempCss -o "$assetsDir/index.css" --minify
if ($LASTEXITCODE -ne 0) {
  Remove-Item $tempCss -ErrorAction SilentlyContinue
  exit $LASTEXITCODE
}

$tempEntry = Join-Path $root ("src/main.localbuild.{0}.jsx" -f ([guid]::NewGuid().ToString("N")))
(Get-Content -Raw "src/main.jsx") `
  -replace 'import "./styles/globals.css";\r?\n', '' `
  -replace 'import "./styles/components.css";\r?\n', '' | Set-Content $tempEntry

$esbuildExe = Join-Path $root "node_modules/esbuild/node_modules/@esbuild/win32-x64/esbuild.exe"
if (-not (Test-Path $esbuildExe)) {
  throw "esbuild.exe not found at $esbuildExe. Run npm ci first."
}

& $esbuildExe $tempEntry --bundle --format=esm --minify --jsx=automatic --outfile="$assetsDir/index.js"
$esbuildExit = $LASTEXITCODE
Remove-Item $tempEntry -ErrorAction SilentlyContinue
Remove-Item $tempCss -ErrorAction SilentlyContinue
if ($esbuildExit -ne 0) {
  exit $esbuildExit
}

Copy-Item -Recurse -Force "public/*" $distDir

$html = Get-Content -Raw "index.html"
$html = $html -replace "%BASE_URL%", "./"
$html = $html -replace '<script type="module" src="/src/main.jsx"></script>', "<link rel=""stylesheet"" href=""./assets/index.css"" />`r`n    <script type=""module"" src=""./assets/index.js""></script>"
Set-Content (Join-Path $distDir "index.html") $html

Write-Host "Local fallback build complete: $distDir"
