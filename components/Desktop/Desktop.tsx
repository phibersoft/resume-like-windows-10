import { FC } from "react";
import styles from "./Desktop.module.scss";
import { Taskbar } from "../Taskbar";
import ProgramConfig from "../../config/program-config";
import PROGRAM_CONFIG, { IProgram } from "../../config/program-config";
import { Shortcut } from "../Shortcut";
import usePrograms from "../../store";
import { Program } from "../Program";

const ALL_PROGRAMS = Object.entries(ProgramConfig);

const Desktop: FC = () => {
  const { activeProgram } = usePrograms();

  return (
    <div className={styles.container}>
      {/* Shortcuts */}
      <div className={styles.shortcuts}>
        {ALL_PROGRAMS.map(([programName, { icon }]) => {
          return (
            <Shortcut
              name={programName as IProgram}
              key={`shortcut-${programName}`}
            >
              {icon}
            </Shortcut>
          );
        })}
      </div>
      <div className={styles.programContainer}>
        {activeProgram && (
          <Program title={activeProgram}>
            {PROGRAM_CONFIG[activeProgram].content}
          </Program>
        )}
      </div>
      <Taskbar />
    </div>
  );
};

export { Desktop };
