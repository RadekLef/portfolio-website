"use client";

import React from "react"
import SectionHeading from './section-heading';
import {motion} from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("Radek");

  return (
    <motion.section
    ref={ref}
    className="mb-28 px-8 py-4 max-w-[45rem] text-slate-200 text-center leading-8 sm:mb-40 scroll-m-28 bg-slate-500/20 rounded-3xl"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about"
    >
        <SectionHeading>O mně</SectionHeading>
        <p className="mb-3">
            Je mi 34 let. Ke kódování jsem se dostal před 2 lety. V současné době pracuji jako znalec v oboru biologie v Kriminalistickém ústavu v Praze. Web development mě zaujal natolik, že jsem se rozhodl změnit obor a věnovat se mu naplno. Základy HTML, CSS a JavaScriptu jsem se naučil na webu Codecademy. Další technologie jako Tailwind CSS, React, Next js jsem se naučil na Udemy nebo svépomocí. Web development mě osobně posouvá, protože jsou zde neustálé výzvy a mám se stále co učit.
        </p>
        <p className="italic">
            Mimo práci a kódování, jsem fanoušek fotografií. Fotím nejraději zvířata (psy). Spolu s manželkou velmi rádi cestujeme.
        </p>
    </motion.section>
  )
}
