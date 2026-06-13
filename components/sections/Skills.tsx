"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Skills" heading="Tech Stack" />
      <div className="flex flex-col gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
