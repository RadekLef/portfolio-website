import kpchp from "@/public/kpchp.jpeg";
import radektube from "@/public/radektube.jpeg";
import todolistimg from "@/public/todolist.jpeg";

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
    title: "KPCHP",
    description:
      "Jednoduchý projekt - web pro klub přátel chodského psa. Vytvořený v Reactu s Tailwind CSS.",
    tags: ["React", "Tailwind", "Framer-motion"],
    imageUrl: kpchp,
    linkUrl: "https://kpchp-project.vercel.app/",
  },
  {
    title: "Youtube klon",
    description:
      "Další jednoduchý projekt - klon Youtube. Vytvořený v Reactu s Tailwind CSS. Jedná se pouze o domovskou stránku.",
    tags: ["React", "Tailwind"],
    imageUrl: radektube,
    linkUrl: "https://radek-tube.vercel.app/",
  },
  {
    title: "Todo list",
    description:
      "Projekt - Todo list. Vytvořený v Reactu s Tailwind CSS. Umožňuje přidávat, mazat a označovat úkoly jako hotové. Další funkcionalita je registrace a přihlášení uživatele.",
    tags: ["React", "Tailwind", "Context API", "Kinde Auth"],
    imageUrl: todolistimg,
    linkUrl: "https://to-do-app-eta-coral.vercel.app/",
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