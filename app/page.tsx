import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { personal } from "@/data/personal";

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="max-w-5xl mx-auto px-6"
      style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <footer className="py-10 px-6 text-center text-white/20 text-xs">
        © {new Date().getFullYear()} {personal.name} · Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
