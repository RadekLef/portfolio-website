"use client";

import React, { useState, useContext } from "react";
import { SectionName } from "@/lib/types";


type ActiveSectionContextProviderProps = {children: React.ReactNode};
type ActiveSectiobContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;     
}

export const ActiveSectionContext = React.createContext<ActiveSectiobContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Domů");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); //dočasně vypne observer, když se klikne na link section v hlavičce

    return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>
  )
}


export function useActiveSectionContext () {
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "useActiveSectionContext musí být součástí ActiveContextProvider"
        );
    }
    return context;
}