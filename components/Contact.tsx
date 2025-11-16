"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="text-[#EEEEEE] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Small label */}
        <p className="text-sm tracking-widest text-[#FF8B42] uppercase">
          Contact
        </p>

        {/* Main heading */}
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          I&apos;d love to connect with you.
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 text-lg">
          Let me know about opportunities, collaborations, or just say hi.
        </p>
      </div>

      {/* Contact methods */}
      <div className="max-w-4xl mx-auto mt-16 grid gap-12 md:grid-cols-2">

        {/* Email */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Mail icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF8B42]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-[#FF8B42]">
            Email Me At
          </h3>
          <p className="text-gray-300">
            <Link
              href="mailto:jihye020211@gmail.com"
              className="text-[#76ABAE] hover:underline"
            >
              jihye020211@gmail.com
            </Link>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* LinkedIn icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF8B42]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM10 9h3.8v1.8h.05A4.16 4.16 0 0 1 18 9.24C21.11 9.24 22 11.28 22 14.26V21H18v-6c0-1.44 0-3.29-2-3.29s-2.31 1.57-2.31 3.18V21H10z" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-[#FF8B42]">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-300">
            <Link
              href="https://www.linkedin.com/in/jihyeleekr/"
              target="_blank"
              className="text-[#76ABAE] hover:underline"
            >
              LinkedIn Profile
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
