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

- The profile photo was extracted directly from the uploaded resume PDF and is quite small (161×166px). For a sharper hero/profile card, swap in a higher-resolution photo at `src/assets/yuvasri-photo.png` (keep the same filename, or update the import in `ProfileCard.jsx`).
- The contact form opens the visitor's email client via a `mailto:` link (no backend) — wire it to a form service (Formspree, Resend, etc.) if you want submissions collected server-side.
- Colors, fonts and animation timing are all centralized in `tailwind.config.js` and `src/index.css`.
