"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-[#EEEEEE] py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Small label */}
        <p className="text-xs tracking-widest text-center text-[#76ABAE] uppercase">
          About
        </p>

        {/* Main Heading */}
        <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-center">
          Let me introduce myself.
        </h2>

        {/* Photo + Intro Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#76ABAE] shadow-md">
              <Image
                src="/Jihye_pro.jpg"
                alt="Jihye Lee Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Intro text */}
          <div className="flex-1 text-left">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I’m a senior majoring in Computer Science at Boston University,
              graduating in May 2026. I originally studied at Temple University
              before transferring to BU.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              My interests lie in AI, machine learning, deep learning, and
              building practical systems that combine research with real-world
              applications. I enjoy creating intelligent tools, full-stack
              applications, and data-driven solutions.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              I’m currently preparing for PhD applications in AI/ML and love
              connecting with people working on impactful and innovative projects.
            </p>
          </div>
        </div>

        {/* Profile + Skills Section */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">

          {/* Profile column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-300">
              Profile
            </h3>

            <div className="mt-4 space-y-3 text-sm md:text-base">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Full Name
                </span>
                <p className="font-medium">Jihye Lee</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Email
                </span>
                <p className="font-medium">jihye020211@gmail.com</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Interests
                </span>
                <p className="font-medium">
                  AI, Machine Learning, Deep Learning, Web Development, Data Science
                </p>
              </div>
            </div>
          </div>

          {/* Skills column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-300">
              Skills
            </h3>

            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-200">
              <li>• Python, PyTorch, NumPy, pandas</li>
              <li>• Machine Learning & Deep Learning</li>
              <li>• React / Next.js, Tailwind CSS</li>
              <li>• SQL, SQLite, data engineering</li>
              <li>• Research: LLMs, multimodal reasoning, graph/tree VQA</li>
            </ul>
          </div>
        </div>

        {/* Buttons — MADE LARGER */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-10 py-4 text-base md:text-lg rounded-md bg-[#76ABAE] text-[#222831] font-bold text-center hover:opacity-90 transition shadow-md"
          >
            Contact Me
          </a>

          <a
            href="/Jihye_Lee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-base md:text-lg rounded-md border border-[#76ABAE] text-[#76ABAE] font-bold text-center hover:bg-[#76ABAE]/10 transition shadow-md"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}
