"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "activities", label: "Activities" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-200 ${isScrolled ? "bg-[#222831]/95 shadow-sm" : "bg-[#222831]/85"
                } backdrop-blur`}
        >
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
                {/*logo*/}
                <button
                    type="button"
                    onClick={() => handleNavClick("home")}
                    className="text-left"
                >
                    <span className="block text-xl font-semibold leading-tight text-[#EEEEEE]">
                        Jihye
                    </span>
                    <span className="block -mt-1 text-xl font-semibold leading-tight text-[#EEEEEE]">
                        Lee
                    </span>
                </button>

                {/* desktop ver */}
                <div className="hidden items-center gap-8 text-sm md:flex">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            onClick={() => handleNavClick(link.id)}
                            className="text-[#EEEEEE] hover:text-[#76ABAE] transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* mobile button*/}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-[#EEEEEE] hover:bg-white/5 md:hidden"
                    aria-label="Toggle navigation"
                >
                    <span className="sr-only">Open main menu</span>
                    <div className="space-y-1.5">
                        <span
                            className={`block h-[2px] w-5 rounded bg-[#EEEEEE] transition-transform ${isOpen ? "translate-y-[5px] rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-5 rounded bg-[#EEEEEE] transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-5 rounded bg-[#EEEEEE] transition-transform ${isOpen ? "-translate-y-[5px] -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* mobile*/}
            <div
                className={`md:hidden transition-[max-height,opacity] duration-200 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <div className="border-t border-white/10 bg-[#222831]">
                    <div className="mx-auto flex max-w-5xl flex-col px-4 py-2">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => handleNavClick(link.id)}
                                className="w-full py-2 text-left text-sm text-[#EEEEEE] hover:text-[#76ABAE] transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
