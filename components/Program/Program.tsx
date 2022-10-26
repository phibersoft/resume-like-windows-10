import {FC, PropsWithChildren, useEffect} from "react";
import styles from "./Program.module.scss";
import usePrograms from "../../store";
import { IProgram } from "../../config/program-config";

interface ProgramProps {
  title: string;
  width?: number;
}

const Program: FC<PropsWithChildren<ProgramProps>> = ({
  title,
  children,
  width = 60,
}) => {
  const { minimizeProgram, closeProgram } = usePrograms();

  return (
    <div className={styles.main} style={{ width: `${width}%` }}>
      <div className={styles.topbar}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.dots}>
          <button
            className={styles.dot}
            onClick={(e) => {
              e.preventDefault();
              minimizeProgram();
            }}
          ></button>
          <button
            className={styles.dot}
            onClick={(e) => {
              e.preventDefault();
              closeProgram(title as IProgram);
            }}
          ></button>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { Program };
