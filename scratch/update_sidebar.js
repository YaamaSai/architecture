const fs = require('fs');
let c = fs.readFileSync('d:/5websites/Architecture/pages/home2.html', 'utf8');

c = c.replace(/nav\.nav-links a\.active \{([\s\S]*?)\}/, `nav.nav-links a.active {
                color: #ffffff !important;
                background: var(--navy) !important;
                border-left: none !important;
                padding-left: 1.5rem !important;
            }`);

c = c.replace(/\.mobile-nav-icon \{([\s\S]*?)\}/, `.mobile-nav-icon {
                display: inline-block !important;
                font-size: 1.1rem;
                color: var(--gold) !important;
                flex-shrink: 0;
            }`);

c = c.replace(/\.nav-dropdown>a \.ph-caret-down \{([\s\S]*?)\}/, `.nav-dropdown>a .ph-caret-down {
                margin-left: auto !important;
                flex-shrink: 0;
                transition: transform 0.3s ease;
                opacity: 0.8;
                color: var(--gold) !important;
            }`);

c = c.replace(/\.dropdown-menu \{([\s\S]*?)\}/, `.dropdown-menu {
                position: static !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                box-shadow: none !important;
                background: #F1F5F9 !important;
                border: none !important;
                padding: 0 !important;
                min-width: unset !important;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.32s ease;
                border-radius: 0 !important;
            }`);

c = c.replace(/\.dropdown-menu a \{([\s\S]*?)\}/, `.dropdown-menu a {
                padding: 0.9rem 1.5rem 0.9rem 3.5rem !important;
                font-size: 0.95rem !important;
                font-weight: 700 !important;
                color: var(--text-mid) !important;
                background: transparent !important;
                border-bottom: 1px solid rgba(0, 0, 0, 0.04) !important;
                border-radius: 0 !important;
                display: flex !important;
                gap: 0.75rem !important;
            }`);

c = c.replace(/nav\.nav-links \{([\s\S]*?)\}/, `nav.nav-links {
                position: fixed;
                top: 0;
                bottom: 0;
                right: -100%;
                width: 70%;
                max-width: 350px;
                background: #FDFBF7 !important;
                border-right: 4px solid var(--gold) !important;
                box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 10000;
            }`);

c = c.replace(/\.h2-sidebar-foot \{([\s\S]*?)\}/, `.h2-sidebar-foot {
                flex-shrink: 0;
                padding: 1rem 1.5rem 1.5rem;
                border-top: 1px solid rgba(0, 0, 0, 0.08);
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                background: transparent !important;
            }`);

c = c.replace(/\.h2-sidebar-head \{([\s\S]*?)\}/, `.h2-sidebar-head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                background: transparent !important;
            }`);

fs.writeFileSync('d:/5websites/Architecture/pages/home2.html', c);
