import { ConsoleIcon, LibraryIcon, WorkIcon } from "../components/SVG";
import { Biography, WorkHistory } from "../components/programs";
import { Projects } from "../components/programs/Projects";

export type IProgram = "biography" | "projects" | "work history";

type IProgramConfig = Record<
  IProgram,
  {
    icon: JSX.Element;
    content: JSX.Element;
  }
>;

const PROGRAM_CONFIG: IProgramConfig = {
  biography: {
    icon: <ConsoleIcon />,
    content: <Biography />,
  },
  projects: {
    icon: <LibraryIcon />,
    content: <Projects />,
  },
  "work history": {
    icon: <WorkIcon />,
    content: <WorkHistory />,
  },
};

export default PROGRAM_CONFIG;
