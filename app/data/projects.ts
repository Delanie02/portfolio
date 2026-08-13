export type ProjectTheme = "sand" | "mist" | "ocean" | "purple";
export type ProjectCategory = "leadership" | "learning";

export interface SharedProjectCardData {
  theme: ProjectTheme;
  title: string;
  description: string;
  image: string;
  href: string;
  category: ProjectCategory;
}

export const projectCards = {
  fordPro: {
    theme: "purple",
    title: "Ford Pro",
    description:
      "I led a high-stakes payments initiative across Ford Credit and Ford Pro, raising design quality, protecting team focus, and aligning stakeholders around a clearer customer payment experience.",
    image: "/images/fordpro/cover.png",
    href: "/projects/fordpro",
    category: "leadership",
  },
  capterra: {
    theme: "sand",
    title: "Capterra",
    description:
      "I led product discovery at Capterra to identify the biggest UX opportunities for reversing organic traffic decline and improving retention across a marketplace with 9M+ monthly visitors.",
    image: "/images/capterra/cover.png",
    href: "/projects/capterra",
    category: "leadership",
  },
  rapidPrototypeTesting: {
    theme: "mist",
    title: "Rapid Prototype Testing",
    description:
      "At Gartner, I helped establish a faster research practice that tripled user testing quarter over quarter and gave product teams a more continuous way to learn.",
    image: "/images/rapid-prototype/cover.png",
    href: "/projects/rapid-prototype-testing",
    category: "leadership",
  },
  fordBlueCruise: {
    theme: "ocean",
    title: "Ford BlueCruise",
    description:
      "I redesigned the FordPass subscription experience to make services like BlueCruise easier to understand, evaluate, and activate.",
    image: "/images/ford-bluecruise/cover.png",
    href: "/projects/ford-bluecruise",
    category: "leadership",
  },
  fiscalNote: {
    theme: "purple",
    title: "FiscalNote",
    description:
      "I shaped a future-state product vision for FiscalNote, bringing more coherence to a complex B2B policy intelligence platform.",
    image: "/images/fiscalnote/cover.png",
    href: "/projects/fiscalnote",
    category: "leadership",
  },
  peacebuilding101: {
    theme: "sand",
    title: "Peacebuilding 101",
    description:
      "I transformed an instructor-led peacebuilding workshop into a self-paced digital course for humanitarian practitioners around the world.",
    image: "/images/peacebuilding/cover.png",
    href: "/projects/peacebuilding-101",
    category: "learning",
  },
  introductionToExcelForDataVisualization: {
    theme: "mist",
    title: "Introduction to Excel for Data Visualization",
    description:
      "I built an online learning product that combined interactive lessons, learner analytics, and iteration to improve engagement and outcomes at scale.",
    image: "/images/excel/cover.png",
    href: "/projects/introduction-to-excel-for-data-visualization",
    category: "learning",
  },
  compactOfMayors: {
    theme: "ocean",
    title: "Compact of Mayors",
    description:
      "I turned complex climate action requirements into a digital learning experience that helped city leaders navigate reporting with more clarity and confidence.",
    image: "/images/compact-of-mayors/cover.png",
    href: "/projects/compact-of-mayors",
    category: "learning",
  },
} satisfies Record<string, SharedProjectCardData>;

export const homepageProjects: SharedProjectCardData[] = [
  projectCards.fordPro,
  projectCards.capterra,
  projectCards.rapidPrototypeTesting,
  projectCards.fordBlueCruise,
  projectCards.fiscalNote,
  projectCards.peacebuilding101,
  projectCards.introductionToExcelForDataVisualization,
  projectCards.compactOfMayors,
];
