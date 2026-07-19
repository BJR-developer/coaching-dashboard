# SustainBL Brand Frontend

Frontend-only prototype for the SustainBL IEP parent journey. No backend — mock data for flow and design testing.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`.env` was copied from `sustainable-website` for later integration; this prototype does not call APIs yet.

## Routes

| Path | Screen |
|------|--------|
| `/sign-in` | Sign in |
| `/forgot-password` | Forgot password |
| `/update-password` | Update password |
| `/setup` | Onboarding step 1 — student |
| `/setup/milestone` | Onboarding step 2 — meeting |
| `/setup/documentation` | Onboarding step 3 — upload |
| `/dashboard` | Home |
| `/sustainbl/*` | SustainBL workspace (Timeline, Documents, Prep tabs only) |
| `/meetings` | Meetings |
| `/meetings/[id]` | Meeting detail |
| `/follow-up` | Follow-up email draft |
| `/reports` | Family PDF list |
| `/reports/[id]` | PDF preview |
| `/ask-copilot` | Ask Copilot |
| `/advocate` | Advocate profile & booking |
| `/settings` | Settings |

Logo: `public/imgs/sustainbl-logos/Original.png` (copied from sustainable-website).

## Design notes

- **Child's Binder** renamed to **SustainBL**
- Timeline / Documents / Prep / Meeting Mode tabs appear **only** inside `/sustainbl/*`
- Brand colors and fonts (`EB Garamond`, `Manrope`) live in CSS variables (`src/app/globals.css`)
