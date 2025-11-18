"use client";

export default function Resume() {
  return (
    <section className="bg-[#F4F4F4] text-[#222831] py-24 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-widest text-[#76ABAE] uppercase">
          Resume
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          More of my credentials.
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Work experience, teaching, and education.
        </p>
      </div>

      {/* ========= WORK / RESEARCH / TEACHING EXPERIENCE ========= */}
      <div className="max-w-5xl mx-auto mt-20">
        <p className="text-center text-sm font-semibold tracking-widest text-[#FF8B42] uppercase">
          Work, Research & Teaching Experience
        </p>

        <div className="mt-10 space-y-16">

          {/* Course Assistant – BU */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">Course Assistant – Web App Development</h3>
              <p className="mt-1 text-gray-500 text-sm">Sep 2024 – Present</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Boston University</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Support students learning React, Next.js, MongoDB, and full-stack development.
                Lead review sessions and assist with debugging during office hours.
              </p>
            </div>
          </div>

          {/* Library Assistant */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">Library Student Assistant</h3>
              <p className="mt-1 text-gray-500 text-sm">2024 – Present</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" />
                  <path d="M6.5 7A2.5 2.5 0 0 0 4 9.5v10A2.5 2.5 0 0 1 6.5 17" />
                  <path d="M20 22V4a2 2 0 0 0-2-2H9" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Boston University – Mugar Library</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Assist patrons with circulation, manage front-desk operations, and help students
                access research and study resources.
              </p>
            </div>
          </div>

          {/* Research Assistant – HCI Lab */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">Undergraduate Research Assistant – HCI / AI</h3>
              <p className="mt-1 text-gray-500 text-sm">2023 – 2024</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M10 2v7.5L5.5 19a2.5 2.5 0 0 0 2.25 3.5h8.5A2.5 2.5 0 0 0 18.5 19L14 9.5V2" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Temple University – HCI Lab</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Researched visual question answering for graph and tree data structures.
                Co-authored an ACM STARS 2024 paper and contributed to dataset curation
                and multimodal LLM evaluation.
              </p>
            </div>
          </div>

          {/* AP Calculus Tutor */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">AP Calculus Tutor</h3>
              <p className="mt-1 text-gray-500 text-sm">Spring 2024</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 12H6" />
                  <path d="M12 6v12" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Remote</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Guided AP Calculus students with structured review sessions and mock exams.
                Helped several students earn a score of <span className="font-semibold">5</span> on the AP exam.
              </p>
            </div>
          </div>

          {/* STEM Tutor */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">STEM Tutor – Computer Science</h3>
              <p className="mt-1 text-gray-500 text-sm">2022 – 2024</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16" />
                  <path d="M4 10h8" />
                  <path d="M4 15h4" />
                  <path d="M14 14l3 3 3-3" />
                  <path d="M17 11v6" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Temple University</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Tutored students in Python, Java, algorithms, and intro-level CS.
                Provided 1:1 and group support for foundational problem-solving skills.
              </p>
            </div>
          </div>

          {/* Harvard Medical School – Data Science Intern */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">Data Science Intern</h3>
              <p className="mt-1 text-gray-500 text-sm">Jun 2021 – Sep 2021</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M10 2v7.5L5.5 19a2.5 2.5 0 0 0 2.25 3.5h8.5A2.5 2.5 0 0 0 18.5 19L14 9.5V2" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Harvard Medical School – Lee Lab</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Engineered a computational workflow for scATAC-seq data analysis in R, resolving
                critical dependency issues to ensure workflow stability. Visualized complex biological
                datasets including Adult Mouse Brain and 10X PBMC, transforming raw data into interpretable insights.
              </p>
            </div>
          </div>


          {/* Teaching Assistant – Grade 3 */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">
                Classroom Teaching Assistant – Grade 3
              </h3>
              <p className="mt-1 text-gray-500 text-sm">2020 – 2021</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 12a5 5 0 1 0-5-5" />
                  <path d="M4 22v-2a6 6 0 0 1 12 0v2" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Calvary Baptist Schools – Lansdale, PA</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Assisted the lead teacher in math and science instruction for 3rd-grade students.
                Designed engaging early-STEM activities to strengthen participation and understanding.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========= EDUCATION SECTION ========= */}
      <div className="max-w-5xl mx-auto mt-24">
        <p className="text-center text-sm font-semibold tracking-widest text-[#FF8B42] uppercase">
          Background Education
        </p>

        <div className="mt-10 space-y-16">

          {/* BU */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">B.A. in Computer Science</h3>
              <p className="mt-1 text-gray-500 text-sm">2024 – 2026 (Expected)</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 10L12 4 2 10l10 6 10-6Z" />
                  <path d="M6 12v5c0 .9 2.7 2 6 2s6-1.1 6-2v-5" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Boston University</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Focus areas include artificial intelligence, machine learning, human-AI interaction,
                full-stack development, and algorithms.
              </p>
            </div>
          </div>

          {/* Temple */}
          <div className="md:grid md:grid-cols-[1fr_auto_1.8fr] gap-8 items-start">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold">B.S. in Computer Science (Transferred)</h3>
              <p className="mt-1 text-gray-500 text-sm">2022 – 2024</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="w-px flex-1 bg-gray-300" />
              <div className="w-12 h-12 rounded-full bg-[#222831] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 10L12 4 2 10l10 6 10-6Z" />
                  <path d="M6 12v5c0 .9 2.7 2 6 2s6-1.1 6-2v-5" />
                </svg>
              </div>
              <div className="w-px flex-1 bg-gray-300" />
            </div>

            <div>
              <p className="font-semibold text-lg">Temple University</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Completed foundational CS coursework, worked as a STEM tutor and HCI
                researcher before transferring to BU to pursue AI/ML specialization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
