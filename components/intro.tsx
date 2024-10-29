"use client";

import profileimg from "@/public/profileimg.jpeg";
import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload}  from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";


export default function Intro() {
    const { ref } = useSectionInView("Domů", 0.7);
    const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center scroll-m-32" id="home">
        <div className="flex flex-col items-center justify-center">
            <div>
                <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}>
                    <Image src={profileimg} alt="profile picture" width="192" height="192" quality="95" priority={true}
                    className="h-32 w-32 sm:h-64 sm:w-64 rounded-2xl border-[0.35rem] border-white object-cover shadow-xl"/>
                </motion.div>
            </div>
            <motion.p className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl font-thin bg-slate-500/20 rounded-3xl text-slate-300"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}>
                Jmenuji se <span className="font-normal">Radek Lefnar</span>, vítám Vás na mém portfoliu. Najdete zde tři jednoduché projekty, které by měly ukázat mé schopnosti v Reactu a Tailwind CSS. Dále se učím TypeScript, Next.js a další technologie.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}>
                <Link href="#contact" 
      onClick={() => {
          setActiveSection("Kontakt");
          setTimeOfLastClick(Date.now())
      }} 
      className="group bg-slate-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-slate-400 active:scale-100 focus:scale-100 transition">
      Kontaktuj mě
      <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
</Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10" href="/CV.pdf" download>Stáhnout CV<HiDownload className="opacity-70 group-hover:translate-y-1 transition"/></a>
                <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10" href="https://www.linkedin.com/in/radek-lefnar-899470323" target="_blank"><BsLinkedin /></a>
                <a className="bg-white text-gray-700 text-[1.2rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10" href="https://github.com/RadekLef/" target="_blank"><FaGithubSquare /></a>
            </motion.div>
        </div>
    </section>
  )
}
