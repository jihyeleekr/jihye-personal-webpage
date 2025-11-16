"use client";

export default function Activities() {
  return (
    <div className="text-[#EEEEEE] py-24 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-widest text-[#76ABAE] uppercase">
          Activities
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          Leadership, Sports & Community Experience
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Activities and contributions beyond academics.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-16 space-y-20">

        {/* ACM — Finance Chair */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#FF8B42]">
            Finance Chair – Association for Computing Machinery (ACM)
          </h3>
          <p className="italic text-gray-300 mt-1">
            Temple University • 2023 – 2024
          </p>
          <p className="mt-6 text-gray-200 text-base leading-relaxed">
            Managed budgeting and fundraising operations for ACM’s chapter.
            Collaborated with university departments and external sponsors to raise{" "}
            <span className="font-semibold">$1,000+</span> for club programs and events.
          </p>
        </div>

        {/* Owl Hacks — Logistics Lead */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#FF8B42]">
            Logistics Lead – Owl Hacks Hackathon
          </h3>
          <p className="italic text-gray-300 mt-1">
            Temple University • 2023
          </p>
          <p className="mt-6 text-gray-200 text-base leading-relaxed">
            Led event logistics and coordinated with sponsors during Temple’s annual
            Owl Hacks hackathon. Delivered sponsor presentations and secured
            <span className="font-semibold"> $1,500+ </span>
            in funding to support event operations and prizes.
          </p>
        </div>
        {/* Upchieve Volunteer */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#FF8B42]">
            STEM Tutor (Volunteer)
          </h3>
          <p className="italic text-gray-300 mt-1">
            Upchieve • 2022 – 2023
          </p>
          <p className="mt-6 text-gray-200 text-base leading-relaxed">
            Volunteer STEM tutor supporting underserved middle and high school students
            with algebra, geometry, and general homework assistance.
          </p>
        </div>

        {/* Women's Baseball */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#FF8B42]">
            Professional Women&apos;s Baseball Player
          </h3>
          <p className="italic text-gray-300 mt-1">
            South Korea National Women&apos;s Baseball Team • 2010 – 2018
          </p>
          <p className="mt-6 text-gray-200 text-base leading-relaxed">
            Competed as a right-handed pitcher in national and international events.
            Participated in the{" "}
            <span className="font-semibold">
              2018 Women&apos;s Baseball World Cup
            </span>{" "}
            as the{" "}
            <span className="font-semibold">youngest pitcher for Team South Korea</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
