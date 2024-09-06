"use client";

import React, { useRef, useState, FormEvent } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const { ref } = useSectionInView("Kontakt");
    const formRef = useRef<HTMLFormElement>(null); 
    const [pending, setPending] = useState(false); 

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setPending(true); 

        const formData = new FormData(formRef.current!); 

        const { data, error } = await sendEmail(formData);

        if (error) {
            toast.error(error);
            setPending(false); 
            return;
        }

        toast.success("Email byl úspěšně odeslán");
        formRef.current?.reset(); 
        setPending(false); 
    };

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-28 scroll-mt-28 sm:mb-20 w-[min(100%,38rem)] text-slate-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Kontaktujte Mě</SectionHeading>
            <p className="text-slate-300 -mt-5">
                Prosím kontaktujte mě pomocí mailu na{" "}
                <a href="mailto:radek.lefnar@icloud.com" className="underline">
                    radek.lefnar@icloud.com
                </a>{" "}
                nebo přes formulář
            </p>
            <form ref={formRef} className="mt-10 flex flex-col" onSubmit={handleSubmit}>
                <input
                    className="h-14 px-4 rounded-lg borderBlack transition-all text-slate-900"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Váš email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 transition-all text-slate-900"
                    name="message"
                    placeholder="Vaše zpráva"
                    required
                    maxLength={5000}
                />
                <SubmitBtn pending={pending} /> {}
            </form>
        </motion.section>
    );
}

