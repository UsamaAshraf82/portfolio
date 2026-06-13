"use client";

import { useState } from "react";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(15,12,41,0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-extrabold text-lg tracking-tight">
          {personal.initials}
          <span className="text-violet-500">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/40 hover:text-white text-sm transition-colors last:text-indigo-400 last:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(15,12,41,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-white/60 hover:text-white text-sm border-b transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
