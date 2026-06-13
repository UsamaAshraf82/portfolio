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
