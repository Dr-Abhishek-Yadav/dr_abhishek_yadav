# Dr. Abhishek Yadav — responsive portfolio redesign

This update replaces the previous layout with a mobile-first, responsive gastroenterology website.

## Requirements
- Node.js LTS (includes npm)
- Internet access for the first dependency install and Google Fonts

## Run locally on Windows
1. Extract the ZIP to a normal folder (for example, `D:\doctor-portfolio`).
2. Open that folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:
   ```powershell
   npm install
   npm run dev
   ```
5. Open the local URL Vite prints (usually `http://localhost:5173/dr_abhishek_yadav/`).
6. Test the page at phone, tablet, and desktop widths using Chrome DevTools.

## Production build
```powershell
npm run build
npm run preview
```

## Deploy to GitHub Pages
The existing Vite base path is preserved as `/dr_abhishek_yadav/`. Keep this path if the repository is named `dr_abhishek_yadav` and is published as a project page. Commit and push the updated files, then publish the generated `dist` folder using the project's existing GitHub Pages workflow or `npm run deploy` if the `gh-pages` package is installed and configured.

## Preserved integrations and details
- Formspree endpoint: `https://formspree.io/f/xpwrepjz`
- Call/WhatsApp: +91 8279263547
- Email: `drabhishekyadavgastro@gmail.com`
- Existing clinic and Kshetrapal Hospital map embeds
- Clinic OPD: Monday–Saturday, 6:00 PM–8:30 PM; Sunday: call for appointments
- Hospital consultation timing: Monday–Saturday, 10:00 AM–5:00 PM (as previously listed)

## Mobile and accessibility improvements
- Responsive navigation and mobile sticky Call / WhatsApp actions
- Fluid headings, flexible grids, touch-friendly controls, safe-area padding
- Lazy-loaded maps and below-the-fold imagery
- Keyboard focus states, descriptive image/map labels, form validation and status messages
- Reduced-motion preference support

Please verify all timings, credentials, contact details, and form submission in the live environment before publishing.
