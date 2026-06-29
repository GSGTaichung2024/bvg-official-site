# Project Rules for Antigravity & Other AI Agents

Please follow these project-specific rules when working on the `bvg-official-site` codebase:

## Cache Busting / Version Control
- **Whenever you modify CSS or JS files** (like `styles.css` or `script.js`), you must update the version query parameter `?v=YYYYMMDD-HHMMSS` in [index.html](file:///Users/mafiahsu/Documents/GitHub/bvg-official-site/index.html) to the current local date and time.
- Locate the comments starting with `<!-- AI Agent: Please update the version query parameter ... -->` in [index.html](file:///Users/mafiahsu/Documents/GitHub/bvg-official-site/index.html) and update the version strings right below them.
- Format: `YYYYMMDD-HHMMSS` (e.g., `20260629-164600`).

## JavaScript & Form Submissions
- Ensure that the contact form in [index.html](file:///Users/mafiahsu/Documents/GitHub/bvg-official-site/index.html) (`#contactForm`) is handled via asynchronous AJAX/Fetch submission in [script.js](file:///Users/mafiahsu/Documents/GitHub/bvg-official-site/script.js) and does not fall back to standard HTML form action/GET query parameter page reload.
- Always run syntax checks (e.g., `node -c script.js`) after editing JavaScript files to prevent parsing errors that silent-fail form event registration.
