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
