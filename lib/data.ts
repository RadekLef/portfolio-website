import underConstructionImg from "@/public/MCRT609.jpg";

export const links = [
  {
    name: "Domů",
    hash: "#home",
  },
  {
    name: "Radek",
    hash: "#about",
  },
  {
    name: "Projekty",
    hash: "#projects",
  },
  {
    name: "Dovednosti",
    hash: "#skills",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Chystá se",
    description:
      "Zde budou příklady mých osobních projektů. Žádný z těchto projektů nebyl nikde veřejně využit.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer-motion"],
    imageUrl: underConstructionImg,
  },
  {
    title: "V produkci",
    description:
      "Zde budou příklady mých osobních projektů. Žádný z těchto projektů nebyl nikde veřejně využit.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: underConstructionImg,
  },
  {
    title: "Stále v produkci",
    description:
      "Zde budou příklady mých osobních projektů. Žádný z těchto projektů nebyl nikde veřejně využit.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: underConstructionImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
] as const;