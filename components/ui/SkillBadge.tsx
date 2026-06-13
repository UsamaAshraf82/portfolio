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
