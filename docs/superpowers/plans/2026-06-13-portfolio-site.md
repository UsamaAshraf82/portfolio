# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Next.js 14 portfolio site with a dark gradient theme showcasing 5 client projects, work experience, skills, and social contact links.

**Architecture:** Single `app/page.tsx` composes all section components in scroll order. All content lives in typed `data/` files — components are purely presentational. No backend, no form, no dynamic routes.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Framer Motion

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | HTML shell, global font (Inter), page metadata, background gradient |
| `app/page.tsx` | Composes all sections in order |
| `app/globals.css` | Tailwind directives + custom CSS vars for design tokens |
| `data/types.ts` | Shared TypeScript interfaces (Project, Experience, SkillGroup, ContactLink) |
| `data/projects.ts` | Array of 5 Project objects |
| `data/skills.ts` | Array of SkillGroup objects |
| `data/experience.ts` | Array of Experience objects |
| `data/contact.ts` | Array of ContactLink objects |
| `data/personal.ts` | Name, tagline, bio, resume URL, social links |
| `components/Navbar.tsx` | Sticky nav with smooth scroll + mobile hamburger |
| `components/sections/Hero.tsx` | Full-height hero with animated entrance |
| `components/sections/About.tsx` | Two-column photo + bio |
| `components/sections/Skills.tsx` | Grouped skill badge grid |
| `components/sections/Experience.tsx` | Vertical timeline |
| `components/sections/Projects.tsx` | 2-col project card grid |
| `components/sections/Contact.tsx` | Three social link cards |
| `components/ui/ProjectCard.tsx` | Single project card (glassmorphism) |
| `components/ui/SkillBadge.tsx` | Single skill pill badge |
| `components/ui/TimelineItem.tsx` | Single timeline entry |
| `components/ui/SectionHeader.tsx` | Reusable section label + heading |

---

## Task 1: Scaffold the Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx` (empty shell)

- [ ] **Step 1: Scaffold the project**

Run in `D:\AI\Portfolio`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```
Expected: Project files created. `npm run dev` works.

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```
Expected: `framer-motion` appears in `package.json` dependencies.

- [ ] **Step 3: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-start: #0f0c29;
  --bg-mid: #1a1040;
  --bg-end: #0f172a;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(160deg, var(--bg-start) 0%, var(--bg-mid) 50%, var(--bg-end) 100%);
  background-attachment: fixed;
  min-height: 100vh;
  color: white;
}
```

- [ ] **Step 4: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description: "Full-Stack Engineer building scalable web apps with React, Node.js & TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 5: Replace `app/page.tsx` with empty shell**

```tsx
export default function Home() {
  return (
    <main>
      <p className="text-white p-8">Portfolio coming soon</p>
    </main>
  );
}
```

- [ ] **Step 6: Verify dev server runs**

```bash
npm run dev
```
Expected: `http://localhost:3000` shows white text "Portfolio coming soon" on dark gradient background.

- [ ] **Step 7: Type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind and Framer Motion"
```

---

## Task 2: Data Layer

**Files:**
- Create: `data/types.ts`
- Create: `data/personal.ts`
- Create: `data/projects.ts`
- Create: `data/skills.ts`
- Create: `data/experience.ts`
- Create: `data/contact.ts`

- [ ] **Step 1: Create `data/types.ts`**

```ts
export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  tags: string[];
  liveUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
}

export interface ContactLink {
  label: string;
  handle: string;
  href: string;
  color: string;
}

export interface Personal {
  name: string;
  initials: string;
  tagline: string;
  bio: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  twitter: string;
}
```

- [ ] **Step 2: Create `data/personal.ts`**

```ts
import type { Personal } from "./types";

export const personal: Personal = {
  name: "Your Name",
  initials: "YN",
  tagline: "Full-Stack Engineer building scalable web apps with React, Node.js & TypeScript.",
  bio: "I'm a full-stack engineer with a passion for building products that solve real problems. I specialize in JavaScript/TypeScript across the stack — from React frontends to Node.js APIs. I've shipped production apps across creator platforms, real estate, and telemedicine. I'm open to full-time roles and freelance projects.",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

- [ ] **Step 3: Create `data/projects.ts`**

```ts
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "marooze",
    name: "Marooze",
    client: "Noligy",
    description: "A professional platform for creators to build their brand and connect with their audience. Features profile management, content publishing, and audience engagement tools.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://www.marooze.com",
  },
  {
    id: "partut",
    name: "Partut",
    client: "Noligy",
    description: "A creator content selling platform enabling digital creators to monetize their work directly. Includes product listings, payments, and delivery automation.",
    tags: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://www.partut.com",
  },
  {
    id: "beiteck",
    name: "Beiteck",
    client: "Beiteck",
    description: "A full-featured real estate marketplace for Lebanon with property listings, search filters, and agent contact flows.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.beiteck.com",
  },
  {
    id: "oikoteck",
    name: "Oikoteck",
    client: "Beiteck",
    description: "A real estate marketplace for Greece, adapted from the Beiteck platform for the Greek market with localized content and currency.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.oikoteck.com",
  },
  {
    id: "24hrdoc",
    name: "24HrDoc",
    client: "24Hrdoc",
    description: "A telemedicine platform for the US market connecting patients with licensed physicians for on-demand virtual consultations.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://www.24hrdoc.com",
  },
];
```

- [ ] **Step 4: Create `data/skills.ts`**

```ts
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Vercel", "GitHub Actions", "Figma"],
  },
];
```

- [ ] **Step 5: Create `data/experience.ts`**

```ts
import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "Beiteck",
    period: "2023 – Present",
    description: "Built and maintained real estate marketplace platforms for Lebanon and Greece. Led frontend architecture and API design.",
    isCurrent: true,
  },
  {
    title: "Full-Stack Developer",
    company: "Noligy",
    period: "2022 – 2023",
    description: "Developed two creator-economy platforms from scratch — a professional creator network and a content monetization marketplace.",
    isCurrent: false,
  },
  {
    title: "Full-Stack Developer",
    company: "24Hrdoc",
    period: "2021 – 2022",
    description: "Built a telemedicine platform connecting US patients with licensed physicians for virtual consultations.",
    isCurrent: false,
  },
];
```

- [ ] **Step 6: Create `data/contact.ts`**

```ts
import type { ContactLink } from "./types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    handle: "usamaashraf82@live.com",
    href: "mailto:usamaashraf82@live.com",
    color: "rgba(99,102,241,0.15)",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    color: "rgba(10,102,194,0.15)",
  },
  {
    label: "WhatsApp",
    handle: "+92 XXX XXX XXXX",
    href: "https://wa.me/92XXXXXXXXXX",
    color: "rgba(37,211,102,0.12)",
  },
];
```

- [ ] **Step 7: Type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add typed data layer for projects, skills, experience, and contact"
```

---

## Task 3: Reusable UI Primitives

**Files:**
- Create: `components/ui/SectionHeader.tsx`
- Create: `components/ui/SkillBadge.tsx`
- Create: `components/ui/TimelineItem.tsx`
- Create: `components/ui/ProjectCard.tsx`

- [ ] **Step 1: Create `components/ui/SectionHeader.tsx`**

```tsx
interface SectionHeaderProps {
  label: string;
  heading: string;
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-2">
        {label}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white">{heading}</h2>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/ui/SkillBadge.tsx`**

```tsx
interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="px-3 py-1 text-xs rounded-full border text-violet-300"
      style={{
        background: "rgba(99,102,241,0.15)",
        borderColor: "rgba(99,102,241,0.3)",
      }}
    >
      {skill}
    </span>
  );
}
```

- [ ] **Step 3: Create `components/ui/TimelineItem.tsx`**

```tsx
import type { Experience } from "@/data/types";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
            experience.isCurrent
              ? "bg-violet-500 shadow-[0_0_8px_2px_rgba(139,92,246,0.6)]"
              : "bg-violet-800"
          }`}
        />
        {!isLast && <div className="w-px flex-1 mt-1 bg-violet-900/50" />}
      </div>
      <div className="pb-8">
        <p className="text-white font-bold text-sm">{experience.title}</p>
        <p className="text-violet-400 text-xs mt-0.5">{experience.company} · {experience.period}</p>
        <p className="text-white/40 text-xs mt-2 leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create `components/ui/ProjectCard.tsx`**

```tsx
import type { Project } from "@/data/types";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3 border transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div>
        <p className="text-[10px] uppercase tracking-widest text-violet-400 mb-1">{project.client}</p>
        <h3 className="text-white font-bold text-base">{project.name}</h3>
      </div>
      <p className="text-white/40 text-xs leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} skill={tag} />
        ))}
      </div>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 text-xs font-medium hover:text-violet-400 transition-colors mt-1 w-fit"
      >
        Live Demo ↗
      </a>
    </div>
  );
}
```

- [ ] **Step 5: Type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add reusable UI primitives (SectionHeader, SkillBadge, TimelineItem, ProjectCard)"
```

---

## Task 4: Navbar

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
"use client";

import { useState } from "react";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(15,12,41,0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-extrabold text-lg tracking-tight">
          {personal.initials}
          <span className="text-violet-500">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/40 hover:text-white text-sm transition-colors last:text-indigo-400 last:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(15,12,41,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-white/60 hover:text-white text-sm border-b transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Add Navbar to `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <p className="text-white p-8 pt-24">Portfolio coming soon</p>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```
Expected: Sticky navbar visible at top with logo and nav links. On mobile, hamburger icon toggles dropdown.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add sticky navbar with mobile hamburger menu"
```

---

## Task 5: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span
          className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-violet-400 mb-6 px-3 py-1 rounded-full border"
          style={{ borderColor: "rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.1)" }}
        >
          Available for hire
        </span>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
          Hi, I&apos;m{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, #6366f1, #a78bfa)" }}
          >
            {personal.name}
          </span>
        </h1>

        <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #6366f1, #8b5cf6)" }}
          >
            View My Work →
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-medium text-white/60 border hover:text-white transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/70 text-xs transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/70 text-xs transition-colors">LinkedIn</a>
          <a href={personal.twitter} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/70 text-xs transition-colors">Twitter / X</a>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```
Expected: Full-height hero with gradient name, fade-in animation, CTA buttons, and social links visible below the navbar.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Hero section with Framer Motion entrance animation"
```

---

## Task 6: About Section

**Files:**
- Create: `components/sections/About.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/About.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="About Me" heading="A little about me" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-10 items-start"
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <div
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              padding: "3px",
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-white/20 text-3xl font-black"
              style={{ background: "#1a1040" }}
            >
              {/* Replace with <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> once photo is added */}
              {personal.initials}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-xl">
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">{personal.bio}</p>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: About section visible on scroll with initials placeholder (or photo if added), bio text, gradient ring around the circle.

- [ ] **Step 4: Type-check + commit**

```bash
npx tsc --noEmit
git add -A
git commit -m "feat: add About section"
```

---

## Task 7: Skills Section

**Files:**
- Create: `components/sections/Skills.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Skills.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Skills" heading="Tech Stack" />
      <div className="flex flex-col gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
```

- [ ] **Step 3: Type-check + commit**

```bash
npx tsc --noEmit
git add -A
git commit -m "feat: add Skills section with grouped badge layout"
```

---

## Task 8: Experience Section

**Files:**
- Create: `components/sections/Experience.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Experience.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Experience" heading="Work History" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.company + exp.period}
            experience={exp}
            isLast={i === experiences.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
```

- [ ] **Step 3: Type-check + commit**

```bash
npx tsc --noEmit
git add -A
git commit -m "feat: add Experience section with vertical timeline"
```

---

## Task 9: Projects Section

**Files:**
- Create: `components/sections/Projects.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Projects.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Projects" heading="Things I've Built" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: 2-column project card grid with glassmorphism cards. Each card shows client label, name, description, tech badges, and a live demo link. Cards have hover glow effect.

- [ ] **Step 4: Type-check + commit**

```bash
npx tsc --noEmit
git add -A
git commit -m "feat: add Projects section with glassmorphism card grid"
```

---

## Task 10: Contact Section

**Files:**
- Create: `components/sections/Contact.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { contactLinks } from "@/data/contact";
import SectionHeader from "@/components/ui/SectionHeader";

const icons: Record<string, string> = {
  Email: "✉️",
  LinkedIn: "in",
  WhatsApp: "💬",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Contact" heading="Let's Work Together" />
      <p className="text-white/40 text-sm mb-8 max-w-md leading-relaxed">
        Have a project in mind or want to collaborate? Reach out through any of the channels below.
      </p>
      <div className="flex flex-col gap-4 max-w-md">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-xl px-5 py-4 border transition-all hover:border-violet-500/40 hover:shadow-[0_0_16px_rgba(99,102,241,0.1)]"
            style={{
              background: link.color,
              borderColor: "rgba(255,255,255,0.08)",
              textDecoration: "none",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0 border"
              style={{ background: link.color, borderColor: "rgba(255,255,255,0.1)" }}
            >
              {icons[link.label] ?? "🔗"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold">{link.label}</p>
              <p className="text-indigo-400 text-xs mt-0.5 truncate">{link.handle}</p>
            </div>
            <span className="text-white/20 text-base">↗</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx` — final version**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Contact section shows 3 animated link cards (Email, LinkedIn, WhatsApp) with correct icons, hover glow, and working `href` links.

- [ ] **Step 4: Type-check + commit**

```bash
npx tsc --noEmit
git add -A
git commit -m "feat: add Contact section with social link cards"
```

---

## Task 11: Section Dividers + Footer + Final Polish

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add subtle section dividers and a footer to `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { personal } from "@/data/personal";

function Divider() {
  return (
    <div
      className="max-w-5xl mx-auto px-6"
      style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <footer className="py-10 px-6 text-center text-white/20 text-xs">
        © {new Date().getFullYear()} {personal.name} · Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Update metadata in `app/layout.tsx`**

Replace the placeholder name with real name (after user updates `data/personal.ts`):
```tsx
export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description: "Full-Stack Engineer building scalable web apps with React, Node.js & TypeScript.",
};
```
(Update `Your Name` to match `personal.name` once the user fills in `data/personal.ts`.)

- [ ] **Step 3: Verify full page in browser**

Check all sections scroll correctly via navbar links, all animations trigger on scroll, contact links open correct targets, page looks correct on mobile (resize browser to 375px width).

- [ ] **Step 4: Final type-check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 5: Final lint check**

```bash
npm run lint
```
Expected: No errors (fix any if present).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: complete portfolio site with section dividers and footer"
```

---

## Task 12: Vercel Deployment

**Files:** None (zero-config deployment)

- [ ] **Step 1: Push to GitHub**

Create a new GitHub repository (e.g. `portfolio`) and push:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin master
```

- [ ] **Step 2: Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project" → import the `portfolio` GitHub repo
3. Leave all settings as defaults (Vercel auto-detects Next.js)
4. Click "Deploy"

Expected: Vercel provides a live URL (e.g. `https://portfolio-yourname.vercel.app`)

- [ ] **Step 3: Update `data/personal.ts` with real content**

Fill in: real name, tagline, bio, resume URL (upload `public/resume.pdf`), GitHub, LinkedIn, Twitter URLs.

- [ ] **Step 4: Update `data/contact.ts`**

Fill in real LinkedIn profile URL and WhatsApp number in `wa.me` format (e.g. `https://wa.me/923001234567`).

- [ ] **Step 5: Add profile photo**

Place photo at `public/profile.jpg` and update `components/sections/About.tsx` — replace the initials div with:
```tsx
<img src="/profile.jpg" alt={personal.name} className="w-full h-full object-cover rounded-full" />
```

- [ ] **Step 6: Final commit and push**

```bash
git add -A
git commit -m "chore: fill in real personal content and profile photo"
git push
```

Vercel auto-deploys on push. Site is live.

---

## Content Checklist (User Action Required)

After implementation, update these files with real data:

- [ ] `data/personal.ts` — name, initials, tagline, bio, social URLs
- [ ] `data/experience.ts` — verify company names, periods, and descriptions match reality
- [ ] `data/projects.ts` — verify tech tags and descriptions are accurate
- [ ] `data/contact.ts` — real LinkedIn URL, real WhatsApp `wa.me` number
- [ ] `public/resume.pdf` — upload your CV
- [ ] `public/profile.jpg` — upload your photo (square, min 400×400px)
- [ ] `app/layout.tsx` — update `metadata.title` with real name
