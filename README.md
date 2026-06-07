# 4P3X Verse™ — Grant-Ready Public Benefit Portfolio
## Powered by 4P3X Intelligent AI™ — Created by Kyzel Kreates™

---

## Project Overview

A grant-ready, public-benefit, installable PWA portfolio showcasing the 4P3X Verse™ modular AI-powered software ecosystem. Suitable for grant reviewers, public-sector partners, charities, councils, safety organisations, transport bodies, education providers, investors, employers, and community funders.

**Demo Mode shows the product. Live Mode runs the product.**

---

## Grant-Ready Positioning

This portfolio is written primarily for grant reviewers and public-benefit partners, with investor and commercial material preserved as secondary content.

Primary grant focus:
- Transport safety and bridge-strike prevention (Big V’s Best Routes™)
- Community welfare coordination (ResponseLink OS™)
- Accessible AI and digital inclusion (Kyzel Clarity™)
- Training and skills access
- Evidence capture and compliance

---

## How to Run Locally

```bash
# No build step required. Serve with any static server:
npx serve .
# or
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## How to Deploy to Vercel

1. Push this folder to a GitHub repository
2. Connect the repo to Vercel at https://vercel.com
3. Deploy (no build command needed — static site)
4. Add environment variables for TextBee (see below)

---

## Logo Usage

**Landscape logo** (`assets/4p3x-landscape-logo.png`):
- Hero section
- Grant plan cover
- Desktop header (brand strip)
- Footer brand strip
- Large portfolio banner

**Square / box logo** (`assets/4p3x-square-logo.png`):
- Favicon and PWA app icon
- Mobile header
- AI agent cards
- Grant impact cards
- Admin panel identity
- Install prompt

Do not distort either logo. Maintain aspect ratio. Do not recreate or replace the logos.

---

## How Demo Mode Works

- All AI agents run locally with pre-built response logic
- Contact form saves leads to localStorage
- No real user data is processed
- TextBee notifications are disabled
- Backend features show "not configured" states

---

## How Live Mode Can Be Connected

1. Enable Live Mode in the Admin panel
2. Connect Supabase, Firebase, or a custom REST API
3. Update environment variables in Vercel
4. Deploy the updated configuration

Once connected, systems support:
- Real users and authentication
- Persistent records and audit logs
- Live dashboards
- Real-time dashboard ↔ backend ↔ PWA communication
- TextBee notifications via serverless route

---

## TextBee Setup (Vercel Environment Variables)

**NEVER put API keys in frontend code, localStorage, README screenshots, or exported ZIPs.**

Add these to Vercel Environment Variables:
```
TEXTBEE_API_KEY=your_textbee_api_key_here
TEXTBEE_DEVICE_ID=your_textbee_device_id_here
TEXTBEE_RECIPIENT=your_recipient_phone_here
```

The serverless route `/api/textbee-lead.js` reads these server-side only.

⚠️ **Security warning:** Revoke any token that may have been accidentally exposed. Never commit secrets to git.

---

## Security

4P3X API Config Guard™ is active. Verified:
- ✓ No secrets in public frontend code
- ✓ TextBee route uses serverless environment variables only
- ✓ No API keys in manifest, app.js, or styles.css
- ✓ No public secrets in info pack JSON

---

## Portfolio Page Map

| Section | ID | Description |
|---|---|---|
| Home / Hero | #top | Grant-ready hero with logos and metrics |
| Grant Plan | #grant | Full grant executive summary and pilots |
| Public Benefit | #public-benefit | Impact areas and partner pathways |
| Safety | #safety | Bridge-strike prevention use case |
| Investor Overview | #investor | Commercial and partnership context |
| Business Plan | #business | Revenue pathways and roadmap |
| Timeline | #timeline | V1→V6 ecosystem evolution |
| Live Projects | #products | 11 deployed product links |
| Kyzel Clarity™ | #clarity | AI explainer PWA section |
| Possible Uses | #uses | 10 sector categories |
| Architecture | #architecture | 7 responsive system diagrams |
| AI Agents | #agents | 3 embedded advisory agents |
| About Me | #about | Founder story |
| Contact | #contact | Grant and partner interest form |
| Admin | #admin | Setup and lead inbox |
| Install PWA | #pwa | PWA install and info pack download |

---

## Grant Review Checklist

- [ ] Grant Plan page exists and is linked from nav
- [ ] Public Benefit page exists with proposed pilot metrics
- [ ] Safety / Bridge-Strike Prevention page exists
- [ ] Responsible AI boundaries are clearly stated
- [ ] No overclaiming of results or guaranteed outcomes
- [ ] Source attribution for bridge-strike statistics
- [ ] Safeguarding notes are present
- [ ] Data protection and staged deployment explained
- [ ] All live product links open in new tabs

---

## Investor Review Checklist

- [ ] Investor Overview page exists
- [ ] Business Plan page exists with roadmap
- [ ] 10 live deployed product links work
- [ ] Timeline V1→V6 is visible
- [ ] Demo/live mode is explained
- [ ] No fake revenue or customer claims
- [ ] Contact form works

---

## Grant Plan Summary

4P3X Verse™ can be grant-funded as a pilot in:
- **Pilot A:** Transport safety / bridge-strike prevention (Big V’s Best Routes™)
- **Pilot B:** Community welfare coordination (ResponseLink OS™)
- **Pilot C:** Accessible AI / digital inclusion (Kyzel Clarity™)

Grant funding covers: backend setup, pilot support, accessibility testing, safety review, UX improvements, user testing, reporting dashboards, deployment, and training material.

---

## Responsible AI Boundaries

All 4P3X Intelligent AI™ systems are advisory only. They do not replace:
- Human judgement
- Professional responsibility
- Legal compliance duties
- Safeguarding oversight
- Official highway or routing data

Human review is required for all safety-critical, compliance-critical, and welfare-critical decisions.

---

## Bridge-Strike Safety Note

Statistics source: Network Rail bridge-strike safety and “Wise Up, Size Up” reporting for 2024/25. All statistics should be verified against the original Network Rail source before use in official grant applications.

---

## Known Limitations

- AI agents use local pre-built logic (not a live LLM API)
- TextBee notifications require Vercel serverless setup
- Live mode requires backend configuration (Supabase/Firebase)
- PWA install prompt availability depends on browser and HTTPS

---

## Final Validation Checklist

- [x] Site runs as static HTML/CSS/JS
- [x] All navigation links work
- [x] All live product URLs open in new tabs
- [x] No exposed secrets
- [x] Logos display correctly (landscape + square)
- [x] PWA manifest configured
- [x] Service worker does not break routing
- [x] Offline fallback page exists
- [x] Install prompt section exists
- [x] Info pack JSON exists
- [x] Admin page does not expose secrets
- [x] TextBee route uses environment variables only
- [x] Contact capture works in demo/local mode
- [x] Grant plan page exists and is linked
- [x] Public benefit page exists and is linked
- [x] Safety/bridge-strike page exists and is linked
- [x] Business plan page exists and is linked
- [x] Kyzel Clarity™ section exists and is linked
- [x] README explains full setup

---

© 2025–2026 Kyzel Kreates™ · 4P3X Verse™ · 4P3X Intelligent AI™ · All rights reserved.
