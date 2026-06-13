"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Experience" heading="Work History" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        {experiences.map((exp, i) => (
          <TimelineItem
            key={`${exp.company}|${exp.period}`}
            experience={exp}
            isLast={i === experiences.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
