$files = Get-ChildItem -Path "d:\5websites\Architecture\pages\*.html"
foreach ($f in $files) {
    $content = Get-Content -Path $f.FullName -Raw
    $newContent = $content -replace '@media \(max-width: 1024px\)', '@media (max-width: 1023px)'
    Set-Content -Path $f.FullName -Value $newContent -NoNewline
}
