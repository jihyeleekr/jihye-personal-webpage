"use client";

type TechTagProps = {
  label: string;
};

function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#76ABAE]/60 px-3 py-1 text-xs text-[#76ABAE]">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section className="text-[#EEEEEE] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-widest text-center text-[#76ABAE] uppercase">
          Projects
        </p>

        {/* Main heading */}
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-center">
          Selected work & research projects.
        </h2>

        <p className="mt-4 text-center text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          A mix of personal projects and course work where I combined AI, data,
          and full-stack development.
        </p>

        {/* ========= FEATURED PROJECTS ========= */}
        <div className="mt-12">
          <p className="text-[11px] tracking-[0.25em] text-center text-gray-400 uppercase">
            Featured Projects
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Dog Breed Classifier – Featured & In Progress */}
            <article
              className="flex flex-col justify-between h-full rounded-2xl bg-[#222831]/70 border border-white/5
                         p-6 md:p-7 shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                         transition-transform transition-shadow duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between text-[11px] uppercase tracking-wide text-gray-400">
                  <span>Course Project</span>
                  <span>December 2025 (Expected)</span>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                  Dog Breed Classifier
                </h3>
                <p className="mt-1 text-xs italic text-gray-400">Developer</p>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  A convolutional neural network model that predicts dog breeds from images,
                  featuring preprocessing, CNN architecture design, and evaluation metrics.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <TechTag label="Python" />
                  <TechTag label="PyTorch" />
                  <TechTag label="CNN" />
                  <TechTag label="Computer Vision" />
                </div>
              </div>

              <span className="mt-8 inline-flex self-start rounded-full bg-[#3A424D] px-6 py-2 text-sm font-medium text-gray-200">
                In Progress
              </span>
            </article>

            {/* AI Bitcoin Trader */}
            <article
              className="flex flex-col justify-between h-full rounded-2xl bg-[#222831]/70 border border-white/5
                         p-6 md:p-7 shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                         transition-transform transition-shadow duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between text-[11px] uppercase tracking-wide text-gray-400">
                  <span>Personal Project</span>
                  <span>November 2024</span>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                  AI Bitcoin Trader
                </h3>
                <p className="mt-1 text-xs italic text-gray-400">Developer</p>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  Automated crypto trading bot integrating Alpaca API, GPT-4 sentiment analysis,
                  Fear &amp; Greed Index, and Korean YouTube transcripts.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <TechTag label="AI" />
                  <TechTag label="Python" />
                  <TechTag label="Alpaca API" />
                  <TechTag label="GPT-4" />
                  <TechTag label="Streamlit" />
                  <TechTag label="SQLite" />
                </div>
              </div>

              <a
                href="https://github.com/jihyeleekr/aibitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex self-start rounded-full border border-[#76ABAE] px-6 py-2 text-sm font-medium text-[#76ABAE] hover:bg-[#76ABAE]/10 transition"
              >
                View on GitHub
              </a>
            </article>
          </div>
        </div>

        {/* ========= MORE FROM MY CV ========= */}
        <div className="mt-16">
          <p className="text-[11px] tracking-[0.25em] text-center text-gray-400 uppercase">
            More from my CV
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Baymax Healthcare Companion – In Progress */}
            <article
              className="flex flex-col justify-between h-full rounded-2xl bg-[#222831]/70 border border-white/5
                         p-6 md:p-7 shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                         transition-transform transition-shadow duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between text-[11px] uppercase tracking-wide text-gray-400">
                  <span>Course Project</span>
                  <span>December 2025 (Expected)</span>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                  Baymax Healthcare Companion
                </h3>
                <p className="mt-1 text-xs italic text-gray-400">Team Project Member</p>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  Multimodal healthcare dashboard with symptom logging, reminders,
                  prescription OCR, and a GPT-4o health assistant.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <TechTag label="AI Chatbot" />
                  <TechTag label="Healthcare" />
                  <TechTag label="Full-stack" />
                  <TechTag label="OCR" />
                  <TechTag label="Next.js" />
                  <TechTag label="Tailwind CSS" />
                </div>
              </div>

              <a
                href="https://github.com/jihyeleekr/Baymax"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex self-start rounded-full border border-[#76ABAE] px-6 py-2 text-sm font-medium text-[#76ABAE] hover:bg-[#76ABAE]/10 transition"
              >
                View on Github
              </a>
            </article>

            {/* COVID-19 Simulation */}
            <article
              className="flex flex-col justify-between h-full rounded-2xl bg-[#222831]/70 border border-white/5
                         p-6 md:p-7 shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                         transition-transform transition-shadow duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between text-[11px] uppercase tracking-wide text-gray-400">
                  <span>Course Project</span>
                  <span>May 2024</span>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                  COVID-19 2D Grid Spread Simulation
                </h3>
                <p className="mt-1 text-xs italic text-gray-400">Developer</p>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  2D agent-based model in MATLAB simulating COVID-19 spread with multiple
                  movement speeds and 1,000+ iterations.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <TechTag label="MATLAB" />
                  <TechTag label="Agent-based Model" />
                  <TechTag label="Simulation" />
                  <TechTag label="Data Analysis" />
                </div>
              </div>

              <a
                href="https://github.com/jihyeleekr/COVID-19-2D-Grid-Spread-Simulation-An-Agent-Based-Model"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex self-start rounded-full border border-[#76ABAE] px-6 py-2 text-sm font-medium text-[#76ABAE] hover:bg-[#76ABAE]/10 transition"
              >
                View on GitHub
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
