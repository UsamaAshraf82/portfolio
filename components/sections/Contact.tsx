"use client";

import { motion } from "framer-motion";
import { contactLinks } from "@/data/contact";
import SectionHeader from "@/components/ui/SectionHeader";

const icons: Record<string, string> = {
  Email: "✉️",
  LinkedIn: "in",
  WhatsApp: "💬",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader label="Contact" heading="Let's Work Together" />
      <p className="text-white/40 text-sm mb-8 max-w-md leading-relaxed">
        Have a project in mind or want to collaborate? Reach out through any of the channels below.
      </p>
      <div className="flex flex-col gap-4 max-w-md">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-xl px-5 py-4 border transition-all hover:border-violet-500/40 hover:shadow-[0_0_16px_rgba(99,102,241,0.1)]"
            style={{
              background: link.color,
              borderColor: "rgba(255,255,255,0.08)",
              textDecoration: "none",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0 border"
              style={{ background: link.color, borderColor: "rgba(255,255,255,0.1)" }}
            >
              {icons[link.label] ?? "🔗"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold">{link.label}</p>
              <p className="text-indigo-400 text-xs mt-0.5 truncate">{link.handle}</p>
            </div>
            <span className="text-white/20 text-base">↗</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
