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
