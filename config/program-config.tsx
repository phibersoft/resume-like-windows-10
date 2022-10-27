import { ConsoleIcon, LibraryIcon, WorkIcon } from "../SVG";
import { Projects, Summary, WorkHistory } from "./programs";

export type IProgram = "summary" | "projects" | "work history";

type IProgramConfig = Record<
  IProgram,
  {
    icon: JSX.Element;
    content: JSX.Element;
    width?: number;
  }
>;

const PROGRAM_CONFIG: IProgramConfig = {
  summary: {
    icon: <ConsoleIcon />,
    content: <Summary />,
    width: 50,
  },
  projects: {
    icon: <LibraryIcon />,
    content: <Projects />,
    width: 55,
  },
  "work history": {
    icon: <WorkIcon />,
    content: <WorkHistory />,
    width: 65,
  },
};

export default PROGRAM_CONFIG;
