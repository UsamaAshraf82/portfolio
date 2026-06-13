# Resume Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/resume` page with a two-column layout (sidebar + main) matching the portfolio's dark aesthetic, with a print stylesheet and a "Print / Save as PDF" button.

**Architecture:** A single self-contained `app/resume/page.tsx` (client component for the print button) imports all data from existing `data/` files plus a new `data/education.ts`. Print styles live in `app/resume/resume.css`. No new shared components needed — the root layout already provides `<html>`, `<body>`, and Inter font; Navbar/footer are only in `app/page.tsx` so they won't appear on `/resume` automatically.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, inline CSS for print styles

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `data/education.ts` | Education data (institution, campus, period) |
| Modify | `data/personal.ts` | Change `resumeUrl` from `"/resume.pdf"` to `"/resume"` |
| Create | `app/resume/resume.css` | `@media print` overrides for clean PDF output |
| Create | `app/resume/page.tsx` | Full two-column resume page, imports all data |

---

## Task 1: Add education data and update resumeUrl

**Files:**
- Create: `data/education.ts`
- Modify: `data/personal.ts`

- [ ] **Step 1: Create `data/education.ts`**

```ts
export const education = {
  institution: "COMSATS University Islamabad",
  campus: "Lahore Campus",
  period: "2015 – 2019",
};
```

- [ ] **Step 2: Update `resumeUrl` in `data/personal.ts`**

Change line 8 from:
```ts
  resumeUrl: "/resume.pdf",
```
to:
```ts
  resumeUrl: "/resume",
```

- [ ] **Step 3: Commit**

```bash
git add data/education.ts data/personal.ts
git commit -m "feat: add education data and update resumeUrl to /resume"
```

---

## Task 2: Create print stylesheet

**Files:**
- Create: `app/resume/resume.css`

- [ ] **Step 1: Create `app/resume/resume.css`**

```css
@media print {
  @page {
    margin: 1cm;
  }

  body {
    background: white !important;
    color: black !important;
  }

  .no-print {
    display: none !important;
  }

  .resume-card {
    border: none !important;
    background: white !important;
    box-shadow: none !important;
  }

  .sidebar {
    background: #f5f5f5 !important;
    border-right: 1px solid #ddd !important;
  }

  .identity-name {
    background: none !important;
    -webkit-text-fill-color: #3730a3 !important;
    color: #3730a3 !important;
  }

  .section-label {
    color: #3730a3 !important;
  }

  .section-label::after {
    background: #c7d2fe !important;
  }

  .sidebar-section-label,
  .contact-label,
  .skill-group-name {
    color: #6b7280 !important;
  }

  .contact-value,
  .identity-title,
  .exp-desc,
  .project-meta,
  .bio {
    color: #374151 !important;
  }

  .exp-company,
  .edu-school,
  .project-name-link {
    color: #111827 !important;
  }

  .exp-period,
  .edu-period,
  .exp-dot,
  .current-badge {
    color: #3730a3 !important;
  }

  .exp-title {
    color: #6b7280 !important;
  }

  .skill-tag {
    background: #e0e7ff !important;
    border-color: #c7d2fe !important;
    color: #3730a3 !important;
  }

  .project-tag {
    background: #e0e7ff !important;
    color: #3730a3 !important;
  }

  .exp-line {
    background: #c7d2fe !important;
  }

  .current-badge {
    background: #e0e7ff !important;
    border-color: #c7d2fe !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/resume/resume.css
git commit -m "feat: add print stylesheet for resume page"
```

---

## Task 3: Build the resume page

**Files:**
- Create: `app/resume/page.tsx`

- [ ] **Step 1: Create `app/resume/page.tsx`**

```tsx
"use client";

import Link from "next/link";
import { personal } from "@/data/personal";
import { contactLinks } from "@/data/contact";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import "./resume.css";

export default function ResumePage() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0f0c29 0%, #1a1040 50%, #0f172a 100%)",
        minHeight: "100vh",
        padding: "24px 16px",
        fontFamily: "inherit",
      }}
    >
      {/* Top bar */}
      <div
        className="no-print"
        style={{
          maxWidth: 860,
          margin: "0 auto 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(139,92,246,0.4)",
            background: "rgba(99,102,241,0.1)",
            color: "#a78bfa",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          ⬇ Print / Save as PDF
        </button>
      </div>

      {/* Resume card */}
      <div
        className="resume-card"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}
      >
        {/* Sidebar */}
        <aside
          className="sidebar"
          style={{
            background: "rgba(99,102,241,0.06)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "36px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* Identity */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 24 }}>
            <div
              className="identity-name"
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                background: "linear-gradient(to right, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {personal.name}
            </div>
            <div className="identity-title" style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 4 }}>
              Full-Stack Developer
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="sidebar-section-label"
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 10 }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {contactLinks.map((c) => (
                <div key={c.label}>
                  <div className="contact-label" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {c.label}
                  </div>
                  <div className="contact-value" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", wordBreak: "break-all" }}>
                    {c.handle}
                  </div>
                </div>
              ))}
              <div>
                <div className="contact-label" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  GitHub
                </div>
                <div className="contact-value" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
                  usamaashraf82
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div
              className="sidebar-section-label"
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 10 }}
            >
              Skills
            </div>
            {skillGroups.map((group) => (
              <div key={group.category} style={{ marginBottom: 12 }}>
                <div className="skill-group-name" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        color: "#a78bfa",
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ padding: "36px 32px", display: "flex", flexDirection: "column", gap: 32 }}>

          {/* Summary */}
          <section>
            <SectionLabel>Summary</SectionLabel>
            <p className="bio" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              {personal.bio}
            </p>
          </section>

          {/* Experience */}
          <section>
            <SectionLabel>Experience</SectionLabel>
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}|${exp.period}`}
                style={{
                  display: "flex",
                  gap: 16,
                  paddingBottom: i < experiences.length - 1 ? 20 : 0,
                  borderBottom: i < experiences.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  marginBottom: i < experiences.length - 1 ? 20 : 0,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                  <div
                    className="exp-dot"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: exp.isCurrent ? "#6366f1" : "rgba(99,102,241,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  {i < experiences.length - 1 && (
                    <div className="exp-line" style={{ flex: 1, width: 1, background: "rgba(99,102,241,0.2)", marginTop: 4 }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                    <span className="exp-company" style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
                      {exp.company}
                      {exp.isCurrent && (
                        <span
                          className="current-badge"
                          style={{
                            display: "inline-block",
                            fontSize: 9,
                            padding: "1px 6px",
                            borderRadius: 3,
                            background: "rgba(99,102,241,0.15)",
                            color: "#a78bfa",
                            border: "1px solid rgba(99,102,241,0.3)",
                            marginLeft: 6,
                            verticalAlign: "middle",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </span>
                    <span className="exp-period" style={{ fontSize: 11, color: "#6366f1", fontWeight: 500 }}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="exp-title" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
                    {exp.title}
                  </div>
                  <div className="exp-desc" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {exp.description}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <SectionLabel>Projects</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
              {projects.map((project) => (
                <div key={project.id}>
                  <a
                    className="project-name-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
                  >
                    {project.name}{" "}
                    <span style={{ fontSize: 10, color: "#6366f1" }}>↗</span>
                  </a>
                  <div className="project-meta" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                    {project.client} · {project.description.split(".")[0]}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 5 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                        style={{
                          background: "rgba(99,102,241,0.1)",
                          color: "rgba(139,92,246,0.75)",
                          fontSize: 9,
                          padding: "1px 5px",
                          borderRadius: 3,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionLabel>Education</SectionLabel>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div className="edu-school" style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                  {education.institution}
                </div>
                <div className="edu-sub" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                  {education.campus}
                </div>
              </div>
              <div className="edu-period" style={{ fontSize: 11, color: "#6366f1", fontWeight: 500 }}>
                {education.period}
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="section-label"
      style={{
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#6366f1",
        marginBottom: 14,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
      <span style={{ flex: 1, height: 1, background: "rgba(99,102,241,0.2)", display: "block" }} />
    </div>
  );
}
```

- [ ] **Step 2: Run the dev server and open http://localhost:3000/resume**

```bash
npm run dev
```

Verify:
- Two-column layout renders correctly (sidebar left, main right)
- All sections appear: Summary, Experience, Skills, Projects, Education
- "Current" badge shows on all three jobs
- Projects render in a 2-column flat list with `↗` links
- "← Back to Portfolio" navigates to `/`
- "Print / Save as PDF" button triggers the browser print dialog
- In the print dialog, check that the page renders with a white background and dark text

- [ ] **Step 3: Commit**

```bash
git add app/resume/page.tsx
git commit -m "feat: add /resume page with two-column layout and print support"
```

---

## Task 4: Verify Hero button links to /resume

**Files:**
- Verify: `data/personal.ts` (already updated in Task 1)
- Verify: `components/sections/Hero.tsx` (uses `personal.resumeUrl`)

- [ ] **Step 1: Confirm Hero "Download Resume" button**

Open http://localhost:3000. The "Download Resume" button in the Hero should now navigate to `/resume` (not `/resume.pdf`). Verify it loads the resume page correctly.

- [ ] **Step 2: Final commit (if any cleanup needed)**

```bash
git add -p
git commit -m "feat: complete resume page — hero button and /resume route"
```
