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
              {personal.title}
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
                  {personal.github.replace("https://github.com/", "")}
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
                  {project.liveUrl ? (
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
                  ) : (
                    <span className="project-name-link" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                      {project.name}
                    </span>
                  )}
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
