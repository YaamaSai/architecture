const fs = require('fs');
const path = require('path');

const pagesDir = 'd:\\5websites\\Architecture\\pages';
const sourceFile = path.join(pagesDir, 'index.html');

const sourceCode = fs.readFileSync(sourceFile, 'utf8');

// 1. Extract CSS block
const cssStart = sourceCode.indexOf('/* ═══════════════════════════════════════════════════\r\n           HOME 2 — PREMIUM MOBILE / TABLET NAV (≤ 1024px)');
const cssEnd = sourceCode.indexOf('</style>', cssStart);
const cssBlock = sourceCode.substring(cssStart, cssEnd);

// 2. Extract Nav block
const navStart = sourceCode.indexOf('<nav class="nav-links" id="h2NavSidebar">');
const navEndStr = '</nav>';
const navEnd = sourceCode.indexOf(navEndStr, navStart) + navEndStr.length;
const navBlock = sourceCode.substring(navStart, navEnd);

// 3. Extract JS block
const jsStart = sourceCode.indexOf('// ── Home 2 Sidebar Logic ported to Home 1 ─────────────────────────────────────');
const jsEnd = sourceCode.indexOf('})();', jsStart) + 5;
const jsBlock = sourceCode.substring(jsStart, jsEnd);

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && f !== 'home2.html' && f !== 'index.html');

for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove existing mobile nav CSS if present (just in case)
    if (content.includes('HOME 2 — PREMIUM MOBILE / TABLET NAV (≤ 1024px)')) {
        continue; // Already processed
    }

    // Insert CSS before </head>
    if (!content.includes(cssBlock)) {
        content = content.replace('</head>', `<style>\n        ${cssBlock}</style>\n</head>`);
    }

    // Replace <nav class="nav-links">...</nav>
    const oldNavStart = content.indexOf('<nav class="nav-links">');
    if (oldNavStart !== -1) {
        let openTags = 1;
        let pos = oldNavStart + '<nav class="nav-links">'.length;
        let oldNavEnd = -1;
        
        // Simple search for the matching </nav>
        while (pos < content.length) {
            if (content.substring(pos, pos + 5) === '<nav ') {
                openTags++;
            } else if (content.substring(pos, pos + 6) === '</nav>') {
                openTags--;
                if (openTags === 0) {
                    oldNavEnd = pos + 6;
                    break;
                }
            }
            pos++;
        }
        
        if (oldNavEnd !== -1) {
            content = content.substring(0, oldNavStart) + navBlock + content.substring(oldNavEnd);
        }
    }

    // Insert JS before </body>
    if (!content.includes(jsBlock)) {
        content = content.replace('</body>', `<script>\n        ${jsBlock}\n    </script>\n</body>`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
}
console.log('Done');
