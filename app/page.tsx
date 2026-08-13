"use client";

import { useMemo, useState } from "react";
import { homepageProjects, type ProjectCategory } from "./data/projects";
import NavSimple from "./components/navigation/NavSimple";
import ProjectCard from "./components/ProjectCard";

type ActiveFilter = "leadership" | "learning" | "all";

const filterOptions: { key: ActiveFilter; label: string }[] = [
  { key: "leadership", label: "Design Leadership" },
  { key: "learning", label: "Learning & Education" },
  { key: "all", label: "All" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("leadership");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return homepageProjects;
    }

    return homepageProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-neutral-balanced-light">
      <NavSimple />

      {/* All page content - centered wrapper */}
      <div className="max-w-[800px] mx-auto px-6">
        <div className="py-16">
          {/* Heading */}
          <h2 className="text-neutral-dark mb-6">
            Hi. I&apos;m <span className="h2-bold text-purple-mid">Delanie Heck.</span>
          </h2>
          {/* Bio */}
          <p className="h4 md:h3 text-neutral-dark mb-12">
            I am a product design leader with 12+ years of experience leading multidisciplinary
            teams and delivering measurable business impact across enterprise platforms, two-sided
            marketplaces, and B2B SaaS products.
            {/* My strength is helping teams succeed in complex
            environments by creating clarity, building trust, and scaling effective ways of working. */}
          </p>
          {/* Project Filters */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8"
            role="group"
            aria-label="Filter projects by category"
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(option.key)}
                  className={`motion-filter relative pb-1 border-b-2 ${
                    isActive
                      ? "h5-bold text-neutral-dark border-purple-mid"
                      : "h5 text-neutral-mid border-transparent hover:text-neutral-dark hover:border-neutral-light"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {/* Project Cards */}
          <div className="flex flex-col gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
    </main>
  );
}
