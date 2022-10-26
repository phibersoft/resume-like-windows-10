import {
  ConsoleIcon,
  GalleryIcon,
  LibraryIcon,
  WorkIcon,
} from "../components/SVG";

export type Program = "gallery" | "biography" | "projects" | "work history";

const PROGRAM_CONFIG: Record<Program, JSX.Element> = {
  gallery: <GalleryIcon />,
  biography: <ConsoleIcon />,
  projects: <LibraryIcon />,
  "work history": <WorkIcon />,
};

export default PROGRAM_CONFIG;
