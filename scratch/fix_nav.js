const fs = require('fs');
let c = fs.readFileSync('d:/5websites/Architecture/pages/home2.html', 'utf8');

const start = c.indexOf('<button class="h2-close-btn"');
const end = c.indexOf('<a href="contact.html">', start);

if (start > -1 && end > -1) {
    const endOfDiv = c.indexOf('</div>', start) + 6;
    const replacement = `\n
                <!-- Scrollable Nav Links -->
                <div class="h2-nav-body">
                    <div class="nav-dropdown">
                        <a href="home2.html" class="active">
                            <i class="ph-bold ph-house mobile-nav-icon"></i>
                            Home
                            <i class="ph-bold ph-caret-down" style="font-size:0.8em;"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a href="index.html"><i class="ph-bold ph-house"
                                    style="font-size:0.85em; color:var(--gold);"></i> Home 1 (Aurora)</a>
                            <a href="home2.html"><i class="ph-bold ph-sparkle"
                                    style="font-size:0.85em; color:var(--gold);"></i> Home 2 (Immersive)</a>
                        </div>
                    </div>
                    <a href="about.html"><i class="ph-bold ph-info mobile-nav-icon"></i> About</a>
                    <a href="services.html"><i class="ph-bold ph-compass mobile-nav-icon"></i> Services</a>
                    <a href="portfolio.html"><i class="ph-bold ph-image mobile-nav-icon"></i> Portfolio</a>
                    <a href="interactive-3d.html"><i class="ph-bold ph-cube mobile-nav-icon"></i> 3D Viewer</a>\n                    `;
    const newC = c.substring(0, endOfDiv) + replacement + c.substring(end);
    fs.writeFileSync('d:/5websites/Architecture/pages/home2.html', newC);
}
