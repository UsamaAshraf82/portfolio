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
