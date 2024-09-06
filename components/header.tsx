"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/app/context/active-section-context";

//conditional class
import clsx from 'clsx';

export default function Header() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return  (<header className="z-[999] relative">
  <motion.div
      className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#fcfcff] border-opacity-40 bg-[#6875d9] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.35rem] sm:w-[36rem] sm:rounded-lg"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
  >
  </motion.div>
  <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-950 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map(link => (
              <motion.li className="relative h-3/4 flex items-center justify-center" key={link.hash} initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}>
                  <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-white transition", {"text-white": activeSection === link.name,})} href={link.hash} 
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                }}>{link.name}
                  {link.name === activeSection && (<motion.span className="bg-gray-800 rounded-xl absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                  }}
                  ></motion.span>)}
                  </Link>
              </motion.li>
          ))}
      </ul>
  </nav>
</header>
)}
