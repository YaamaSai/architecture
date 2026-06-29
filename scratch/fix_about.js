const fs = require('fs');
let c = fs.readFileSync('d:/5websites/Architecture/pages/about.html', 'utf8');

const start = c.indexOf('<div class="about-timeline-grid">');
const end = c.indexOf('<div class="tl-title">ArchStruct Opens Its Doors</div>', start);

if (start > -1 && end > -1) {
    const replacement = `<div class="about-timeline-grid">
                <div>
                    <div class="section-label"><i class="ph-fill ph-clock-clockwise"></i> Our Journey</div>
                    <h2>A Decade and a Half of Design Excellence.</h2>
                    <p>From a two-architect studio in Brooklyn to a globally recognised firm, every milestone has been
                        built on the principles of innovation, integrity, and impact.</p>
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                        alt="Milestone Building" class="about-timeline-img">
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot filled"></div>
                        <div class="tl-year">2010 — Founded</div>
                        `;
    const newC = c.substring(0, start) + replacement + c.substring(end);
    fs.writeFileSync('d:/5websites/Architecture/pages/about.html', newC);
}
