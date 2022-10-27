import { FC, PropsWithChildren } from "react";
import styles from "./Shortcut.module.scss";
import usePrograms from "../../store";
import type { IProgram } from "../../config/program-config";

interface ShortcutProps {
  name: IProgram | string;
  onClick?: () => void;
}

const Shortcut: FC<PropsWithChildren<ShortcutProps>> = ({
  name,
  children,
  onClick,
}) => {
  const { openProgram } = usePrograms();
  return (
    <div
      className={styles.main}
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          openProgram(name as IProgram);
        }
      }}
    >
      <div className={styles.icon}>{children}</div>
      <h4 className={styles.name}>{name}</h4>
    </div>
  );
};

export { Shortcut };
