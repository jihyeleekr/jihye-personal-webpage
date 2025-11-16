"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-[#1F242B] text-[#EEEEEE] shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

                {/* Left - Name */}
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                    Jihye Lee
                </h1>

                {/* Right - Nav */}
                <nav className="space-x-6 md:space-x-10 text-lg md:text-xl font-medium">
                    <Link href="#about" className="hover:text-[#76ABAE] transition">About</Link>
                    <Link href="#projects" className="hover:text-[#76ABAE] transition">Projects</Link>
                    <Link href="#activities" className="hover:text-[#76ABAE] transition">Activities</Link>
                    <Link href="#resume" className="hover:text-[#76ABAE] transition">Resume</Link>
                    <Link href="#contact" className="hover:text-[#76ABAE] transition">Contact</Link>
                </nav>

            </div>
        </header>
    );
}
