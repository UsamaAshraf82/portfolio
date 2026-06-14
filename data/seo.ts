import { personal } from "./personal";
import { projects } from "./projects";
import { skillGroups } from "./skills";

const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const seo = {
  siteName: `${personal.name} Portfolio`,
  title: `${personal.name} | Full-Stack Developer`,
  description:
    "Portfolio of Usama Ashraf, a full-stack developer specializing in React, Next.js, Node.js, TypeScript, creator platforms, real estate marketplaces, and telemedicine products.",
  keywords: [
    personal.name,
    personal.title,
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio",
    ...skillGroups.flatMap((group) => group.skills),
    ...projects.map((project) => project.name),
  ],
  url: siteUrl,
  locale: "en_US",
};
