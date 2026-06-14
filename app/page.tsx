import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";
import { skillGroups } from "@/data/skills";

function Divider() {
  return (
    <div aria-hidden="true" className="max-w-5xl mx-auto px-6 h-px bg-white/5" />
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: seo.url,
    jobTitle: personal.title,
    description: seo.description,
    sameAs: [personal.github, personal.linkedin, personal.twitter],
    knowsAbout: skillGroups.flatMap((group) => group.skills),
    hasOccupation: {
      "@type": "Occupation",
      name: personal.title,
      skills: skillGroups.flatMap((group) => group.skills).join(", "),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.url,
      name: seo.title,
    },
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.liveUrl,
      keywords: project.tags.join(", "),
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
