"use client";

import React, { useEffect} from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projekty", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-m-28 mb-28 text-slate-200">
        <SectionHeading>Moje projekty</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}


