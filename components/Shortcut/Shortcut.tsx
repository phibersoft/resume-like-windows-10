import { FC, PropsWithChildren, useState } from "react";
import styles from "./Shortcut.module.scss";
import usePrograms from "../../store";
import type { Program } from "../../config/program-config";

interface ShortcutProps {
  name: Program;
}

const Shortcut: FC<PropsWithChildren<ShortcutProps>> = ({ name, children }) => {
  const { openProgram } = usePrograms();
  return (
    <div
      className={styles.main}
      onClick={() => {
        openProgram(name);
      }}
    >
      <div className={styles.icon}>{children}</div>
      <h4 className={styles.name}>{name}</h4>
    </div>
  );
};

export { Shortcut };
