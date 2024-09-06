"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const { ref } = useSectionInView("Kontakt");

  return (
    <motion.section 
    ref={ref}    
    id="contact"
        className="mb-28 scroll-mt-28 sm:mb-20 w-[min(100%,38rem)] text-slate-200 text-center"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
        >
        <SectionHeading>Kontaktujte Mě</SectionHeading>
        <p className="text-slate-300 -mt-5">Prosím kontaktujte mě pomocí mailu na <a href="mailto:radek.lefnar@icloud.com" className="underline">radek.lefnar@icloud.com</a> nebo přes formulář</p>
    <form className="mt-10 flex flex-col"
      action={async (formData) => {
      const {data, error} = await sendEmail(formData);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email byl úspěšně odeslán")
    }}
    >
        <input className="h-14 px-4 rounded-lg borderBlack transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Váš email"/>
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4 transition-all "
          name="message"
          placeholder="Vaše zpráva"
          required
          maxLength={5000}/>
        <SubmitBtn />
    </form>
    </motion.section>
  )
}
