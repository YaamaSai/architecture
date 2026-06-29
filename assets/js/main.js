// ─── Scroll Reveal ─────────────────────────────────────────────────────────
(function () {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('revealed');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    function initReveal() {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReveal);
    } else {
        initReveal();
    }
})();

// ─── Counter Animation ──────────────────────────────────────────────────────
(function () {
    let fired = false;
    const cobs = new IntersectionObserver((entries) => {
        if (fired) return;
        entries.forEach(e => {
            if (e.isIntersecting) {
                fired = true;
                document.querySelectorAll('[data-count]').forEach(el => {
                    const target = parseInt(el.getAttribute('data-count'));
                    const suffix = el.getAttribute('data-suffix') || '';
                    let current = 0;
                    const step = Math.max(1, Math.ceil(target / 65));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) { current = target; clearInterval(timer); }
                        el.textContent = current + suffix;
                    }, 22);
                });
                cobs.disconnect();
            }
        });
    }, { threshold: 0.25 });

    function initCounters() {
        const band = document.querySelector('.stats-band, [data-count]');
        if (band) cobs.observe(band);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
    } else {
        initCounters();
    }
})();

// ─── Theme Toggle ───────────────────────────────────────────────────────────
(function () {
    function initTheme() {
        const btn  = document.getElementById('theme-toggle');
        const icon = btn ? btn.querySelector('i') : null;
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            if (icon) icon.className = 'ph-bold ph-sun';
        }
        if (btn) {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const dark = document.body.classList.contains('dark-mode');
                if (icon) icon.className = dark ? 'ph-bold ph-sun' : 'ph-bold ph-moon';
                localStorage.setItem('theme', dark ? 'dark' : 'light');
            });
        }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTheme);
    else initTheme();
})();

// ─── RTL Toggle ────────────────────────────────────────────────────────────
(function () {
    function initRTL() {
        if (localStorage.getItem('dir') === 'rtl') document.documentElement.setAttribute('dir', 'rtl');
        const btn = document.getElementById('rtl-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const rtl = document.documentElement.getAttribute('dir') === 'rtl';
                document.documentElement.setAttribute('dir', rtl ? 'ltr' : 'rtl');
                localStorage.setItem('dir', rtl ? 'ltr' : 'rtl');
            });
        }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initRTL);
    else initRTL();
})();



// --- Service Modal Logic ---------------------------------------------------
function openServiceModal(cardElement) {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    // Extract data from the clicked card's hidden .modal-data
    const dataNode = cardElement.querySelector('.modal-data');
    if (!dataNode) return;
    
    const title = dataNode.querySelector('.m-title').innerHTML;
    const subtitle = dataNode.querySelector('.m-subtitle').innerHTML;
    const imageSrc = dataNode.querySelector('.m-image').innerText.trim();
    const descHTML = dataNode.querySelector('.m-desc').innerHTML;
    const pillsHTML = dataNode.querySelector('.m-pills').innerHTML;
    
    // Populate Modal
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalSubtitle').innerHTML = '<i class=\"ph-fill ph-check-circle\"></i> ' + subtitle;
    document.getElementById('modalImg').src = imageSrc;
    document.getElementById('modalDesc').innerHTML = descHTML;
    document.getElementById('modalPills').innerHTML = pillsHTML;
    
    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeServiceModal(event, force=false) {
    if (force || event.target.id === 'serviceModal') {
        const modal = document.getElementById('serviceModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// ─── Dynamic Active Mobile Sidebar Links ────────────────────────────────────
(function () {
    function setActiveNavLink() {
        const path = window.location.pathname;
        let page = path.split('/').pop();
        if (!page) page = 'index.html'; // Default to index if empty

        const sidebar = document.getElementById('h2NavSidebar');
        if (sidebar) {
            // Find all anchor links inside the sidebar body and dropdowns
            const links = sidebar.querySelectorAll('.h2-nav-body a');
            
            // Remove active from everything first
            links.forEach(a => {
                a.classList.remove('active');
            });
            
            // Add active to the one matching the current URL
            links.forEach(a => {
                const href = a.getAttribute('href');
                if (href === page || (page === '' && href === 'index.html')) {
                    a.classList.add('active');
                    
                    // If it's inside a dropdown menu, highlight the parent dropdown trigger too
                    const parentDropdown = a.closest('.nav-dropdown');
                    if (parentDropdown) {
                        const trigger = parentDropdown.querySelector('a');
                        if (trigger) trigger.classList.add('active');
                    }
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }
})();
