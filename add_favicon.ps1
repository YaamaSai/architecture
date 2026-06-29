$files = Get-ChildItem -Path d:\5websites\Architecture\pages\*.html
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -notmatch 'rel="icon"') {
        $content = $content -replace '<head>', "<head>`n    <link rel='icon' type='image/svg+xml' href='../assets/favicon.svg'>"
        Set-Content -Path $f.FullName -Value $content
    }
}
