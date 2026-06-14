import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/data/personal";
import { contactLinks } from "@/data/contact";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import PrintButton from "./PrintButton";
import "./resume.css";

export const metadata: Metadata = {
  title: `${personal.name} Resume`,
  description: `Resume for ${personal.name}, a full-stack developer specializing in React, Next.js, Node.js, and TypeScript.`,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 py-6 bg-[linear-gradient(160deg,#0f0c29_0%,#1a1040_50%,#0f172a_100%)] print:bg-white print:p-0">

      {/* Top bar */}
      <div className="max-w-[860px] mx-auto mb-5 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="text-white/35 text-[13px] no-underline hover:text-white/70 transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <PrintButton />
      </div>

      {/* Resume card */}
      <div className="max-w-[860px] mx-auto bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden grid grid-cols-[240px_1fr] print:border-0 print:bg-white print:rounded-none print:shadow-none">

        {/* Sidebar */}
        <aside className="bg-indigo-500/[0.06] border-r border-white/[0.06] p-9 flex flex-col gap-7 print:bg-gray-50 print:border-r print:border-gray-200 print:p-5 print:gap-4">

          {/* Identity */}
          <div className="border-b border-white/[0.07] pb-6 print:border-gray-200 print:pb-3">
            <div className="name-gradient text-xl font-black tracking-[-0.02em] bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
              {personal.name}
            </div>
            <div className="text-[12px] text-white/45 mt-1 print:text-gray-600">
              {personal.title}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/30 mb-2.5 print:text-gray-400">
              Contact
            </div>
            <div className="flex flex-col gap-[7px] print:gap-[4px]">
              {contactLinks.map((c) => (
                <div key={c.label}>
                  <div className="text-[9px] text-white/30 uppercase tracking-[0.08em] print:text-gray-400">
                    {c.label}
                  </div>
                  <div className="text-[11px] text-white/70 break-all print:text-gray-700">
                    {c.handle}
                  </div>
                </div>
              ))}
              <div>
                <div className="text-[9px] text-white/30 uppercase tracking-[0.08em] print:text-gray-400">
                  GitHub
                </div>
                <div className="text-[11px] text-white/70 print:text-gray-700">
                  {personal.github.replace("https://github.com/", "")}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/30 mb-2.5 print:text-gray-400">
              Skills
            </div>
            {skillGroups.map((group) => (
              <div key={group.category} className="mb-3 print:mb-1.5">
                <div className="text-[10px] text-white/40 mb-1.5 print:text-gray-500">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-500/15 border border-indigo-500/20 text-violet-400 text-[10px] px-2 py-0.5 rounded print:bg-indigo-100 print:border-indigo-200 print:text-indigo-700"
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
        <main className="p-9 flex flex-col gap-8 print:p-5 print:gap-4">

          {/* Summary */}
          <section>
            <SectionLabel>Summary</SectionLabel>
            <p className="text-[13px] text-white/55 leading-[1.7] print:text-gray-600 print:text-[11px] print:leading-snug">
              {personal.bio}
            </p>
          </section>

          {/* Experience */}
          <section>
            <SectionLabel>Experience</SectionLabel>
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}|${exp.period}`}
                className={`flex gap-4 ${i < experiences.length - 1 ? "pb-5 mb-5 border-b border-white/[0.04] print:border-gray-100 print:pb-3 print:mb-3" : ""}`}
              >
                <div className="flex flex-col items-center pt-1">
                  <div className={`w-2 h-2 rounded-full shrink-0 print:bg-indigo-700 ${exp.isCurrent ? "bg-indigo-500" : "bg-indigo-500/40"}`} />
                  {i < experiences.length - 1 && (
                    <div className="flex-1 w-px bg-indigo-500/20 mt-1 print:bg-indigo-200" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="text-[14px] font-bold text-white/90 print:text-gray-900">
                      {exp.company}
                      {exp.isCurrent && (
                        <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-violet-400 border border-indigo-500/30 ml-1.5 align-middle print:bg-indigo-100 print:text-indigo-700 print:border-indigo-200">
                          Current
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] text-indigo-400 font-medium print:text-indigo-700">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/40 mb-1.5 print:text-gray-500">
                    {exp.title}
                  </div>
                  <div className="text-[12px] text-white/50 leading-[1.6] print:text-gray-600 print:text-[10px] print:leading-snug">
                    {exp.description}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <SectionLabel>Projects</SectionLabel>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 print:gap-y-2">
              {projects.map((project) => (
                <div key={project.id}>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-white/85 no-underline hover:text-violet-400 transition-colors print:text-gray-900"
                    >
                      {project.name}{" "}
                      <span className="text-[10px] text-indigo-400 print:text-indigo-600">↗</span>
                    </a>
                  ) : (
                    <span className="text-[13px] font-semibold text-white/85 print:text-gray-900">
                      {project.name}
                    </span>
                  )}
                  <div className="text-[11px] text-white/35 mt-0.5 print:text-gray-500">
                    {project.client} · {project.description.split(".")[0]}
                  </div>
                  <div className="flex flex-wrap gap-[3px] mt-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-500/10 text-violet-400/75 text-[9px] px-[5px] py-px rounded print:bg-indigo-100 print:text-indigo-700"
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
            <div className="flex justify-between items-baseline">
              <div>
                <div className="text-[14px] font-bold text-white/85 print:text-gray-900">
                  {education.institution}
                </div>
                <div className="text-[12px] text-white/40 mt-0.5 print:text-gray-500">
                  {education.campus}
                </div>
              </div>
              <div className="text-[11px] text-indigo-400 font-medium print:text-indigo-700">
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
    <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-indigo-500 mb-3.5 flex items-center gap-2 print:text-indigo-700 print:mb-2">
      {children}
      <span className="flex-1 h-px bg-indigo-500/20 block print:bg-indigo-200" />
    </div>
  );
}
