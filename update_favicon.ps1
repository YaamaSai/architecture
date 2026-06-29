$files = Get-ChildItem -Path d:\5websites\Architecture\pages\*.html
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    $content = $content -replace "href='../assets/favicon.svg'", "href='../assets/favicon.png'"
    $content = $content -replace "type='image/svg\+xml'", "type='image/png'"
    Set-Content -Path $f.FullName -Value $content
}
