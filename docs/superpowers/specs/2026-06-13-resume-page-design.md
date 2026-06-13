# Resume Page Design

**Date:** 2026-06-13
**Status:** Approved

## Overview

A `/resume` route in the Next.js portfolio app — a styled, two-column resume page that matches the portfolio's dark glassmorphism aesthetic. Includes a "Print / Save as PDF" button that triggers `window.print()`. The existing "Download Resume" button in the Hero will be updated to link to `/resume` instead of `/resume.pdf`.

## Layout

Two-column layout inside a single card:

- **Left sidebar (240px):** Identity (name + title), Contact info, Skills grouped by category
- **Right main column (flex: 1):** Summary, Experience, Projects, Education

The card uses the portfolio's existing visual language: `rgba(255,255,255,0.03)` background, `rgba(255,255,255,0.07)` border, 16px border-radius.

## Sections

### Top bar (outside the card)
- "← Back to Portfolio" link (navigates to `/`)
- "⬇ Print / Save as PDF" button — calls `window.print()`

### Sidebar
- **Identity:** Name in gradient (`#6366f1 → #a78bfa`), title in muted white
- **Contact:** Email, LinkedIn, WhatsApp, GitHub — each as label + value pair, pulled from `data/contact.ts` and `data/personal.ts`
- **Skills:** Grouped by category (Frontend, Backend, Database, Tools), rendered as pill tags — pulled from `data/skills.ts`

### Main — Summary
Short bio paragraph pulled from `personal.bio` in `data/personal.ts`.

### Main — Experience
Timeline with purple dot + vertical line. Each entry: company name, "Current" badge if `isCurrent`, period (right-aligned in indigo), title, description. Data from `data/experience.ts`.

### Main — Projects
Two-column flat list (no boxes). Each item: project name as an external link with `↗`, company · short description below, tech tags. Data from `data/projects.ts`.

### Main — Education
Single row: institution name + campus on the left, year range on the right.

## Data

### New file: `data/education.ts`
```ts
export const education = {
  institution: "COMSATS University Islamabad",
  campus: "Lahore Campus",
  period: "2015 – 2019",
};
```

### Updated: `data/personal.ts`
`resumeUrl` changes from `"/resume.pdf"` to `"/resume"`.

## Print Stylesheet

A `@media print` block in a dedicated `app/resume/resume.css` file (imported in `page.tsx`) that:
- Sets background to white, text to black
- Removes the top bar buttons
- Removes sidebar background tint
- Adjusts font colors for contrast on paper
- Sets `@page { margin: 1cm; }`

## Routing

New file: `app/resume/page.tsx` — a standard Next.js page, no special layout wrapper needed (it should not render the Navbar or footer from the root layout).

To opt out of the root layout, `app/resume/layout.tsx` is created returning just `{children}`.

## Components

All layout and styling lives in `app/resume/page.tsx` (and optionally a `app/resume/layout.tsx`). No new shared components are needed — the resume is a self-contained page.

## What is NOT in scope
- PDF generation via libraries (react-pdf, Puppeteer)
- Animations (no Framer Motion on the resume page — keep it static for print)
- A separate downloadable PDF file
