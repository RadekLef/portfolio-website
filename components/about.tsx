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
            Je mi 34 let. Kódování se učím necelé dva roky - první web, který mě zaujal byl Codecademy. Tento web mi dal základy pro to se naučit HTML, CSS a JavaScript. Jak jsem se dál rozhlížel, tak jsem narazil na TailWind CSS framework. Dalším krokem je získat pevné základní znalosti v React a Next.js
        </p>
        <p className="italic">
            Mimo práci a kódování, jsem fanoušek fotografií. Fotím nejraději zvířata (psy). Spolu s manželkou velmi rádi cestujeme.
        </p>
    </motion.section>
  )
}
