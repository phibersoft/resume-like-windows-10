export type ICompany =
  | "wens"
  | "gumusistan"
  | "multiple companies"
  | "range media";

export interface IWork {
  title: string;
  company: ICompany;
  type: "full time" | "contract" | "freelance";
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

const WORK_HISTORY_CONFIG: IWork[] = [
  {
    title: "Sr. Fullstack Developer",
    company: "gumusistan",
    type: "full time",
    startDate: "January 2020",
    endDate: "June 2022",
    description: `Developed a management panel with order and product modules, invoice calculations, cargo and marketplace integrators. My responsibility was to be involved in the whole process. Such as writing the backend, creating reusable components on the frontend, bundle analysis and more. `,
    technologies: [
      "Typescript",
      "NextJS",
      "React",
      "PostgreSQL",
      "ExpressJS",
      "CSS",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "wens",
    type: "freelance",
    startDate: "May 2020",
    endDate: "September 2020",
    description: `Together with the design team, we developed an e-commerce site for Wens. My responsibility was to convert the figma design to React on the frontend, and i wrote the backend entirely myself.`,
    technologies: [
      "Typescript",
      "NextJS",
      "React",
      "PostgreSQL",
      "Cloud Functions",
      "Redux",
    ],
  },
  {
    title: "Electron (web-based desktop) Developer",
    company: "multiple companies",
    type: "freelance",
    startDate: "February 2019",
    endDate: "December 2019",
    description:
      "I built a program that calculates the costs of products according to their commision rates and integrates them into the marketplaces. Mikro Lazer, RSilver and similar companies actively use this program.",
    technologies: ["Typescript", "Electron", "React"],
  },
  {
    title: "Jr. PHP Developer",
    company: "range media",
    type: "contract",
    startDate: "February 2018",
    endDate: "October 2018",
    description:
      'I was the least experienced developer of a program that can be summarized as "Instagram Plus"',
    technologies: ["PHP", "MySQL"],
  },
];

export default WORK_HISTORY_CONFIG;
