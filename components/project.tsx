"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";


type ProjectProps = (typeof projectsData)[number];

 export default function Project ({
    title, 
    description, 
    tags, 
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return ( 
    <motion.div
    ref={ref} 
    style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
    className="group mb-3  text-slate-950 sm:mb-8 last:mb-0" >
        <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) =>(
                <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full dark:text-white/70">{tag}</li>
            ))}
        </ul>
        <Image src={imageUrl} alt="Projekty, na kterých bych chtěl pracovat" quality={85} 
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-105
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] 
            group-even:-left-40"/>
        </div>
        </section>
    </motion.div>
    
    
)}