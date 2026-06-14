"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-[18px] py-2 rounded-full border border-violet-500/40 bg-indigo-500/10 text-violet-400 text-[12px] font-semibold cursor-pointer hover:bg-indigo-500/20 transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
