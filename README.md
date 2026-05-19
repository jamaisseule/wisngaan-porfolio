# wisngaan Portfolio — React + Vite

Personal portfolio for **Truong Thai Quy Ngan**, built with React 18 and Vite.

---

## Project Structure

```
src/
├── constants/
│   └── data.js               # All resume data (single source of truth)
├── hooks/
│   ├── useInView.js           # IntersectionObserver — scroll-triggered reveals
│   └── useActiveSection.js    # Tracks active nav section on scroll
├── styles/
│   └── global.css             # CSS variables, resets, keyframes, shared utilities
├── components/
│   ├── Cursor/                # Custom dual-ring cursor (desktop)
│   ├── Navbar/                # Sticky nav + mobile hamburger drawer
│   ├── Hero/                  # Full-viewport intro section
│   ├── Reveal/                # Fade-up scroll animation wrapper
│   ├── SectionHeading/        # Reusable section title with accent bar
│   ├── ExperienceCard/        # Single timeline experience item
│   ├── Experience/            # Experience section (maps over data)
│   ├── ProjectCard/           # Single project card with hover glow
│   ├── Projects/              # Projects grid section
│   ├── Skills/                # Skills grouped by category
│   ├── Contact/               # Contact CTA + info grid
│   └── Footer/                # Bottom footer bar
├── App.jsx                    # Root layout — composes all sections
└── main.jsx                   # React DOM entry point
```

---

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Customization

All content lives in **`src/constants/data.js`** — edit your name, bio, jobs, projects, and skills there. No hunting through component files.

Styling uses **CSS Modules** (one `.module.css` per component) plus CSS variables defined in `src/styles/global.css`.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Build tool & dev server |
| CSS Modules | Scoped component styles |
| IntersectionObserver | Scroll-triggered animations |
| Google Fonts | Syne + DM Mono |
