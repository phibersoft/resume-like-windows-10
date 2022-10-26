import { ConsoleIcon, LibraryIcon, WorkIcon } from "../SVG";
import { Biography, WorkHistory } from "./programs";
import { Projects } from "./programs/Projects";

export type IProgram = "biography" | "projects" | "work history";

type IProgramConfig = Record<
  IProgram,
  {
    icon: JSX.Element;
    content: JSX.Element;
    width?: number;
  }
>;

const PROGRAM_CONFIG: IProgramConfig = {
  biography: {
    icon: <ConsoleIcon />,
    content: <Biography />,
    width: 50,
  },
  projects: {
    icon: <LibraryIcon />,
    content: <Projects />,
    width: 80,
  },
  "work history": {
    icon: <WorkIcon />,
    content: <WorkHistory />,
    width: 75,
  },
};

export default PROGRAM_CONFIG;
