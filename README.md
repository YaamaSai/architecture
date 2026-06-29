# ArchStruct Design Firm - Website Template

## Overview
This is a comprehensive, responsive HTML template designed specifically for Architecture and Structural Design Firms. It features a modern layout with a premium Slate Navy and Brass Gold color palette, leveraging CSS variables, Flexbox/Grid layouts, and modular architecture.

## Features
- **Responsive Design**: Mobile-first CSS ensuring perfect display across all devices.
- **Dark/Light Mode**: Built-in theme toggle with `localStorage` persistence.
- **RTL Support**: Full Right-to-Left layout support for Arabic/Hebrew content.
- **Client Dashboard**: A specialized secure portal UI for clients to review 3D models, track milestones, and manage documents.
- **Custom Gallery**: A unique, non-uniform grid layout for portfolio showcasing.
- **SEO Optimized**: Semantic HTML5 structure.

## File Structure
- `assets/css/`: Contains all stylesheets (style.css, responsive.css, dark-mode.css, rtl.css, custom-gallery.css).
- `assets/js/`: Contains interaction scripts (main.js, mobile-nav.js).
- `pages/`: Contains all HTML templates.

## Customization Guide
1. **Colors**: Open `assets/css/style.css` and modify the `:root` CSS variables to change the global color scheme.
2. **Typography**: The template uses Google Fonts 'Outfit'. You can change this by importing a new font in `style.css` and updating `--font-main`.
3. **Images**: All images are currently pulled from Unsplash placeholders. Replace the `src` attributes in the HTML files with your own assets.

## Integration Points
- **Contact Form**: The form in `contact.html` is ready to be connected to a backend or service like Formspree.
- **Client Portal**: The `client-dashboard.html` is a static UI. It must be connected to a backend authentication system and database to become functional.

## Quality Assurance
- W3C Validated HTML.
- Tested across major modern browsers (Chrome, Firefox, Safari, Edge).
- Accessibility considerations built-in.
