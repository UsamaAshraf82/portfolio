import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "marooze",
    name: "Marooze",
    client: "Noligy",
    description: "A professional platform for creators to build their brand and connect with their audience. Features profile management, content publishing, and audience engagement tools.",
    tags: ["Next.JS", "Node.js", "TypeScript", "MongoDB"],
    liveUrl: "https://www.marooze.com",
  },
  {
    id: "partut",
    name: "Partut",
    client: "Noligy",
    description: "A creator content selling platform enabling digital creators to monetize their work directly. Includes product listings, payments, and delivery automation.",
    tags: ["Next.js", "Nest.js", "Stripe", "MongoDB"],
    liveUrl: "https://www.partut.com",
  },
  {
    id: "beiteck",
    name: "Beiteck",
    client: "Beiteck",
    description: "A full-featured real estate marketplace for Lebanon with property listings, search filters, and agent contact flows.",
    tags: ["React", "Parse Server", "Tailwind CSS"],
    liveUrl: "https://www.beiteck.com",
  },
  {
    id: "oikoteck",
    name: "Oikoteck",
    client: "Beiteck",
    description: "A real estate marketplace for Greece, adapted from the Beiteck platform for the Greek market with localized content and currency.",
    tags: ["Nest.JS", "Parse Server", "Tailwind CSS"],
    liveUrl: "https://www.oikoteck.com",
  },
  {
    id: "24hrdoc",
    name: "24HrDoc",
    client: "24Hrdoc",
    description: "A telemedicine platform for the US market connecting patients with licensed physicians for on-demand virtual consultations.",
    tags: ["Next.js", "Parse Server", "Nest.js"],
    liveUrl: "https://www.24hrdoc.com",
  },
];
