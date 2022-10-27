import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./Taskbar.module.scss";
import {
  BatteryIcon,
  SearchIcon,
  WifiIcon,
  WindowsTaskbarIcon,
} from "../../SVG";
import usePrograms from "../../store";
import ProgramConfig from "../../config/program-config";

const Taskbar: FC = () => {
  const { currentPrograms, activeProgram, minimizeProgram, openProgram } =
    usePrograms();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.main}>
      {/*Icons*/}
      <div className={styles.icons}>
        <TaskbarItem>
          <WindowsTaskbarIcon />
        </TaskbarItem>
        <TaskbarItem>
          <SearchIcon />
        </TaskbarItem>

        {currentPrograms.map((program) => {
          const isActive = program === activeProgram;
          let onClick: Function;

          if (isActive) {
            onClick = () => {
              minimizeProgram();
            };
          } else {
            onClick = () => {
              openProgram(program);
            };
          }
          return (
            <TaskbarItem
              programName={isSmallScreen ? "" : program}
              active={program === activeProgram}
              onClick={onClick}
              key={`taskbar-item-${program}`}
            >
              {ProgramConfig[program].icon}
            </TaskbarItem>
          );
        })}
      </div>
      {/* Time and battery/wifi */}
      <div className={styles.statusBar}>
        <TaskbarItem>
          <WifiIcon />
        </TaskbarItem>
        <TaskbarItem>
          <BatteryIcon />
        </TaskbarItem>
        <TaskbarItem>
          <Clock />
        </TaskbarItem>
      </div>
    </div>
  );
};

const TaskbarItem: FC<
  PropsWithChildren<{
    onClick?: Function;
    programName?: string;
    active?: boolean;
  }>
> = ({ children, onClick, programName, active = false }) => {
  return (
    <div
      className={`${styles.taskbarItem} ${
        programName ? styles.withProgramName : ""
      } ${active ? styles.active : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      <div className={styles.taskbarIcon}>{children}</div>
      {programName && (
        <h4 className={styles.taskbarProgramName}>{programName}</h4>
      )}
    </div>
  );
};

const Clock: FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    if (!time) setTime(new Date());
    // Update the time every minute
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className={styles.clock}>
      <p>
        {/* Hour:Minute */}
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
      <p>
        {/* Day/Month/Year */}
        {time.toLocaleDateString([], {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export { Taskbar };
