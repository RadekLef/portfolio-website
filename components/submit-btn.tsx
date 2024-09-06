import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
    pending: boolean;
}

export default function SubmitBtn({ pending }: SubmitBtnProps) {
    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-4 h-[3rem] w-[8rem] bg-slate-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-300 active:scale-105 disabled:scale-100 disabled:bg-opacity-75"
            disabled={pending} 
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Odeslat{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
            )}
        </button>
    );
}

