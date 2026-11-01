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
      {project.closedDate && (
        <p className="text-white/50 text-xs mt-1">
          Shut down in {project.closedDate}
        </p>
      )}
      {project.liveUrl && !project.closedDate && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 text-xs font-medium hover:text-violet-400 transition-colors mt-1 w-fit"
        >
          Live Demo ↗
        </a>
      )}
    </div>
  );
}
