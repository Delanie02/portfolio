export type NavTheme = "sand" | "mist" | "ocean" | "purple";

export interface NavProjectSectionLink {
  label: string;
  href: string;
  id: string;
}

export interface NavProjectProps {
  theme: NavTheme;
  sectionLinks?: NavProjectSectionLink[];
}
