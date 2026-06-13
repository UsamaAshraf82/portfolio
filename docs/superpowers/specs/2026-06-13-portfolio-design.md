# Portfolio Site — Design Spec
**Date:** 2026-06-13  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS  
**Visual Theme:** Dark Gradient / Modern (deep navy-purple, indigo/violet accent, glassmorphism cards)

---

## 1. Overview

A single-page portfolio site for a Full-Stack Software Engineer (JS/TS stack). The audience is dual: recruiters hiring for full-time roles and freelance clients. The site must communicate technical competence and ship-quality polished UI in a single scrollable experience.

---

## 2. Architecture

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion (subtle entrance animations per section)
- **Deployment:** Vercel (zero-config for Next.js)
- **Contact:** Static social links only — no backend, no form submission
- **Structure:** Single `page.tsx` composing all section components. No dynamic routes needed.

```
app/
  layout.tsx        # global fonts, metadata, background
  page.tsx          # composes all sections in order
  globals.css       # Tailwind base + custom CSS vars

components/
  Navbar.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Contact.tsx
  ui/
    ProjectCard.tsx
    SkillBadge.tsx
    TimelineItem.tsx

data/
  projects.ts       # project data array
  skills.ts         # skills list
  experience.ts     # work history array
```

---

## 3. Sections

### 3.1 Navbar
- Sticky, full-width, slightly blurred background (`backdrop-blur`)
- Logo: initials + purple dot (e.g. `YN.`)
- Nav links: About · Skills · Experience · Projects · Contact
- Smooth scroll to section anchors on click
- On mobile: hamburger menu or just horizontal scroll

### 3.2 Hero
- Full-viewport-height section with the page's gradient background
- Content:
  - "Available for hire" badge (top)
  - Name in large bold type with gradient text effect
  - One-line tagline: role + tech focus
  - Two CTAs: "View My Work" (primary, gradient pill button) + "Download Resume" (ghost button)
  - Social icon links: GitHub · LinkedIn · Twitter/X
- Entrance animation: fade-in + slight upward slide on load

### 3.3 About
- Two-column layout on desktop (photo left, bio right); stacked on mobile
- Profile photo (circular, with subtle gradient ring border)
- Bio: 3–4 sentences, conversational tone — who you are, what you love building, what you're looking for
- Placeholder copy provided; user fills in real content

### 3.4 Skills
- Section label + heading
- Tech stack displayed as pill badges grouped by category:
  - **Frontend:** React, Next.js, TypeScript, Tailwind CSS
  - **Backend:** Node.js, Express, REST APIs
  - **Database:** PostgreSQL, MongoDB
  - **Tools:** Git, Docker, Vercel, GitHub Actions
- Badges use indigo/violet background with matching border

### 3.5 Experience
- Vertical timeline (line + dot markers on the left)
- Each entry: Job title, Company, Date range, 1–2 line description
- Most recent entry has a glowing dot; older entries are dimmer
- Placeholder entries provided; user fills in real data

### 3.6 Projects
- Heading: "Things I've Built"
- 2-column responsive card grid (1 column on mobile)
- All 5 projects shown
- Each `ProjectCard` contains:
  - Project name (bold)
  - Short description (2 sentences max)
  - Tech stack badges
  - GitHub link + Live Demo link (both open in new tab)
- Cards use glassmorphism: semi-transparent background, subtle border, hover glow effect

### 3.7 Contact
- Heading: "Let's Work Together"
- Short invitation copy (1–2 sentences)
- Three clickable link cards, each with:
  - Icon + label + handle/address
  - Arrow indicator
  - Opens correct app/URL on click:
    - **Email:** `mailto:` link
    - **LinkedIn:** `https://linkedin.com/in/...`
    - **WhatsApp:** `https://wa.me/...` deep link
- No form, no backend

---

## 4. Design Tokens

| Token | Value |
|---|---|
| Background | `#0f0c29` → `#1a1040` → `#0f172a` (gradient) |
| Primary accent | `#6366f1` (indigo-500) |
| Secondary accent | `#8b5cf6` (violet-500) |
| Text primary | `#ffffff` |
| Text muted | `rgba(255,255,255,0.4)` |
| Card background | `rgba(255,255,255,0.03)` |
| Card border | `rgba(255,255,255,0.08)` |
| Badge background | `rgba(99,102,241,0.15)` |

---

## 5. Responsive Behavior

- **Mobile (< 640px):** Single column throughout; navbar collapses; hero text scales down
- **Tablet (640–1024px):** 2-col project grid; about section stacks
- **Desktop (> 1024px):** Full layout as designed

---

## 6. Data & Content

All real content (name, bio, project details, experience, social handles) is stored in `data/` files as typed TypeScript arrays/objects. The UI components are purely presentational — no hardcoded strings outside `data/`. This makes content updates trivial.

User must supply:
- Real name and tagline
- Profile photo
- Bio text
- Work experience entries
- 5 project entries (name, description, tech tags, GitHub URL, live URL)
- Email, LinkedIn URL, WhatsApp number

---

## 7. Out of Scope

- Blog / articles section
- Dark/light mode toggle
- Project detail pages
- CMS integration
- Analytics (can be added post-launch via Vercel)
