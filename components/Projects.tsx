"use client";

import Link from "next/link";

type Project = {
  name: string;
  role: string;
  timeframe: string;
  type: "Personal Project" | "Course Project";
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "AI Bitcoin Trader",
    role: "Developer",
    timeframe: "November 2024",
    type: "Personal Project",
    description:
      "Developed an automated cryptocurrency trading bot integrating the Alpaca API with GPT-4–based sentiment analysis, the Fear & Greed Index, and Korean YouTube transcripts to generate context-aware trading signals.",
    tags: ["AI", "Python", "Alpaca API", "GPT-4", "Streamlit", "SQLite"],
    link: "https://github.com/jihyeleekr/aibitcoin",
    featured: true,
  },
  {
    name: "Baymax Healthcare Companion",
    role: "Team Project Member",
    timeframe: "December 2025 (Expected)",
    type: "Course Project",
    description:
      "Built a multimodal healthcare dashboard inspired by Baymax, with symptom logging, medication reminders, prescription OCR, and an AI health chatbot using GPT-4o to provide personalized suggestions.",
    tags: ["AI Chatbot", "Healthcare", "Full-stack", "OCR"],
    link: "https://github.com/jihyeleekr/Baymax",
    featured: true,
  },
  {
    name: "COVID-19 2D Grid Spread Simulation",
    role: "Developer",
    timeframe: "May 2024",
    type: "Course Project",
    description:
      "Engineered a 2D grid-based agent model in MATLAB to simulate the spread of COVID-19 under different movement speeds, analyzing susceptible, infected, quarantined, and immune populations over 1,000 simulations.",
    tags: ["Simulation", "Agent-based Model", "MATLAB", "Data Analysis"],
    link: "https://github.com/jihyeleekr/COVID-19-2D-Grid-Spread-Simulation-An-Agent-Based-Model",
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="text-[#EEEEEE] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm tracking-widest text-[#76ABAE] uppercase">
            Projects
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            A snapshot of my technical work.
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Selected projects from my CV, focusing on AI, healthcare, and
            simulation.
          </p>
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm tracking-widest text-gray-400 uppercase text-center">
              Featured Projects
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm tracking-widest text-gray-400 uppercase text-center">
              More from my CV
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl border border-white/5 bg-[#31363F]/80 px-6 py-6 shadow-lg shadow-black/30 transition-transform hover:-translate-y-1 hover:shadow-xl ${featured ? "md:col-span-1" : ""
        }`}
    >
      {/* Type & timeframe */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
        <span>{project.type}</span>
        <span>{project.timeframe}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold">
        {project.name}
      </h3>
      <p className="mt-1 text-sm italic text-gray-300">{project.role}</p>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-200 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#76ABAE]/40 bg-[#222831]/60 px-2.5 py-1 text-xs text-[#76ABAE]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-3">
        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full border border-[#76ABAE] px-4 py-2 text-sm font-medium text-[#76ABAE] hover:bg-[#76ABAE] hover:text-[#222831] transition-colors"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
}
