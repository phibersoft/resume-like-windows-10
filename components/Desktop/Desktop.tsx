import { FC } from "react";
import styles from "./Desktop.module.scss";
import { Taskbar } from "../Taskbar";
import ProgramConfig, { Program } from "../../config/program-config";
import { Shortcut } from "../Shortcut";

const ALL_PROGRAMS = Object.entries(ProgramConfig);

const Desktop: FC = () => {
  return (
    <div className={styles.container}>
      {/* Shortcuts */}
      <div className={styles.shortcuts}>
        {ALL_PROGRAMS.map(([programName, icon]) => {
          return (
            <Shortcut
              name={programName as Program}
              key={`shortcut-${programName}`}
            >
              {icon}
            </Shortcut>
          );
        })}
      </div>
      <Taskbar />
    </div>
  );
};

export { Desktop };
