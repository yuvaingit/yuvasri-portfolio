# Yuvasri N — Portfolio

A dark, premium, animation-first portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Highlights

- **Signature device intro** — a laptop mockup (auto-swaps to tablet/phone on smaller screens) boots a terminal sequence and reveals a "View Yuvasri's Profile" button, which transitions smoothly into the homepage.
- **Tinder-inspired profile card** — 3D tilt on hover, layered depth, and a detail reveal — kept fully professional.
- **Case-study project modals** — cards morph into full case studies using shared-layout animation.
- **All content sourced from the resume** — see `src/data/resumeData.js`, the single source of truth for every section (education, skills, projects, experience, certifications, achievements).
- Dark theme only: black / charcoal / navy / white·grey text / a single restrained blue accent — no purple, no glassmorphism, no percentage bars.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx                 # intro <-> homepage transition
  index.css                # design tokens / base styles
  data/resumeData.js       # all resume-sourced content — edit this to update copy
  assets/yuvasri-photo.png # profile photo extracted from the resume
  components/
    DeviceIntro.jsx        # laptop/tablet/phone boot experience
    Navbar.jsx
    Hero.jsx
    ProfileCard.jsx
    About.jsx               # About Me + Academics
    Skills.jsx
    Projects.jsx            # cards + case-study modal
    Experience.jsx
    Certifications.jsx
    Achievements.jsx
    Contact.jsx
    Footer.jsx
```

## Notes
The photograph displayed on this portfolio belongs to Yuvasri and is intended solely for personal portfolio and professional identification purposes. Unauthorized downloading, copying, reproduction, redistribution, modification, or use of this photograph for any other purpose without prior written permission is strictly prohibited.

© 2026 Yuvasri. All rights reserved.
