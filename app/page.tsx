"use client";

import { useMemo, useState } from "react";
import NavSimple from "./components/navigation/NavSimple";
import ProjectCard from "./components/ProjectCard";

type ProjectCategory = "leadership" | "learning";
type ActiveFilter = "leadership" | "learning" | "all";

interface ProjectItem {
  theme: "sand" | "mist" | "ocean" | "purple";
  title: string;
  description: string;
  image: string;
  href: string;
  category: ProjectCategory;
}

const filterOptions: { key: ActiveFilter; label: string }[] = [
  { key: "leadership", label: "Design Leadership" },
  { key: "learning", label: "Learning & Education" },
  { key: "all", label: "All" },
];

const projects: ProjectItem[] = [
  {
    theme: "purple",
    title: "Ford Pro",
    description:
      "I led a cross-functional payments initiative across Ford Credit and Ford Pro, raising the quality bar while aligning teams around a clearer, more transparent customer payment experience.",
    image: "/images/fordpro/cover.png",
    href: "/projects/fordpro",
    category: "leadership",
  },
  {
    theme: "sand",
    title: "Capterra",
    description:
      "I led a cross-functional initiative to uncover the largest UX opportunity areas to reverse declining organic traffic and improve user retention for Capterra, a software reviews platform serving over 9 million active monthly users.",
    image: "/images/capterra/cover.png",
    href: "/projects/capterra",
    category: "leadership",
  },
  {
    theme: "mist",
    title: "Rapid Prototype Testing",
    description:
      "As Associate Director, UX at Gartner, I partnered with product and design leads to pilot a rapid and continuous way of doing research. As a result, we tripled the number of user tests run quarter-over-quarter.",
    image: "/images/rapid-prototype/cover.png",
    href: "/projects/rapid-prototype-testing",
    category: "leadership",
  },

  {
    theme: "ocean",
    title: "Ford BlueCruise",
    description:
      "I redesigned the subscription experience in FordPass, Ford's consumer mobile app. From the product details page to the manage flow, I made it easier for customers to find, learn about, and activate services like BlueCruise.",
    image: "/images/ford-bluecruise/cover.png",
    href: "/projects/ford-bluecruise",
    category: "leadership",
  },
  {
    theme: "purple",
    title: "FiscalNote",
    description:
      "I led a cross-functional team to envision a unified future-state product for FiscalNote, a B2B policy intelligence platform.",
    image: "/images/fiscalnote/cover.png",
    href: "/projects/fiscalnote",
    category: "leadership",
  },
  {
    theme: "sand",
    title: "Peacebuilding 101",
    description:
      "I designed a global online learning experience that transformed an instructor-led peacebuilding workshop into an interactive, self-paced course for humanitarian practitioners.",
    image: "/images/peacebuilding/cover.png",
    href: "/projects/peacebuilding-101",
    category: "learning",
  },
  {
    theme: "mist",
    title: "Introduction to Excel for Data Visualization",
    description:
      "I built and optimized a scalable online learning product that combined interactive experiences, learner analytics, and continuous iteration to improve engagement and outcomes.",
    image: "/images/excel/cover.png",
    href: "/projects/introduction-to-excel-for-data-visualization",
    category: "learning",
  },
  {
    theme: "ocean",
    title: "Compact of Mayors",
    description:
      "I designed a digital learning experience that transformed complex climate action requirements into an engaging journey for city leaders around the world.",
    image: "/images/compact-of-mayors/cover.png",
    href: "/projects/compact-of-mayors",
    category: "learning",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("leadership");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
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
            I am a product design leader with 12+ years of experience leading high-performing teams
            and delivering measurable business impact across platforms. I am at my best when I am
            coaching designers and creating intuitive experiences for complex systems.
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
