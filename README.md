# Becklan BMS V12.0 — GitHub Pages PWA

This package upgrades the GitHub-hosted Becklan staff app to **BMS V12.0**.

The GitHub app is a secure launcher/PWA for the Google Apps Script BMS. Operational data and PIN data remain in Google Sheets/Apps Script, not in GitHub.

## Files
- index.html
- app.js
- config.js
- styles.css
- manifest.webmanifest
- service-worker.js
- icons/

## Current Apps Script web-app URL
`https://script.google.com/macros/s/AKfycbyieXVejLAvcMnJEsRpD3OPRuB3FgFKW_vcDmFNkU3vsTJOa-7s1IQNhHhD5wDiGb78/exec`

If the existing Apps Script deployment is upgraded in place, this URL normally remains unchanged. If a new deployment is created, update only `BMS_URL` in `config.js`.

## GitHub upgrade
1. Back up the existing repository.
2. Upload the contents of this ZIP to the repository root.
3. Replace old index.html, app.js, config.js, styles.css, manifest.webmanifest, service-worker.js and icons.
4. Keep the same repository name to retain the current GitHub Pages address.
5. Commit the changes and verify Settings → Pages.
6. Force-refresh the GitHub Pages site once.
7. Reopen/reinstall the PWA if needed.

## V12.0 functions
The app opens the main V12.0 BMS, including patient search/selection, recent patients, Treatment, Services, balance payments, multi-medication sales, multi-medication purchases, Monthly Stock updates, Management sales/revenue reports and low-stock reporting.
