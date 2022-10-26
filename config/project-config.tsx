export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  status: "deprecated" | "development" | "completed" | "private";
  npmLink?: string;
  githubLink?: string;
}

const PROJECTS_CONFIG: IProject[] = [
  {
    title: "Remote Controller",
    description:
      "A remote controller for your computer. Control your computer with your phone.",
    technologies: ["Socket.io", "Node.js", "Kotlin", "RobotJS"],
    githubLink: "https://github.com/phibersoft/remote-controller",
    status: "completed",
  },
  {
    title: "Turkish Marketplaces",
    description:
      "Library that allows you to manage API Integrations of Marketplaces from within a uniform class.",
    technologies: ["Typescript", "Node.js"],
    npmLink: "https://www.npmjs.com/package/turkish-marketplaces",
    githubLink: "https://github.com/phibersoft/turkish-marketplaces",
    status: "completed",
  },
  {
    title: "VR Extension",
    description:
      "VR Glasses is too heavy. So, I decided to develop a chrome extension that allows you to watch VR videos with only mouse clicks 360deg. Currently in development.",
    technologies: [
      "Typescript",
      "React",
      "VideoJS",
      "ThreeJS",
      "React-Three-Fiber",
    ],
    status: "development",
  },
  {
    title: "Invoice Management Panel",
    description:
      "A management panel for invoices. You can create, edit, delete and export invoices. You can also create and edit customers. This program is not open source.",
    technologies: ["Typescript", "React", "Nextron", "Material UI"],
    status: "private",
  },
  {
    title: "PostgrExpress",
    description:
      "A simple and lightweight route generator for ExpressJS and PostgreSQL.",
    technologies: ["Typescript", "ExpressJS", "PostgreSQL"],
    npmLink: "https://www.npmjs.com/package/postgrexpress",
    githubLink: "https://github.com/phibersoft/postgrexpress",
    status: "completed",
  },
  {
    title: "Auther",
    description:
      "If you are tired of writing login/register/forgot-password routes in every project, Auther is for you.",
    technologies: ["Typescript", "ExpressJS", "PostgreSQL"],
    githubLink: "https://github.com/phibersoft/auther",
    status: "deprecated",
  },
  {
    title: "PhOptimizer",
    description: "Image optimizer from command line. Simple and easy to use.",
    technologies: ["Typescript", "NodeJS", "PKG"],
    npmLink: "https://www.npmjs.com/package/phoptimizer",
    githubLink: "https://github.com/phibersoft/PhOptimizer",
    status: "completed",
  },
];

export default PROJECTS_CONFIG;
