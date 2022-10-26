import { FC, useEffect, useState } from "react";
import styles from "./HackPanel.module.scss";
import HACK_CONFIG from "../../../config/hack-config";

const HackItem: FC<{
  hack: typeof HACK_CONFIG[0];
}> = ({ hack }) => {
  return (
    <div className={styles.hack}>
      <p>{hack.question}</p>
      {hack.link ? (
        <a href={hack.link} target="_blank" rel="noreferrer">
          {hack.answer}
        </a>
      ) : (
        <p>{hack.answer}</p>
      )}
    </div>
  );
};

const HackPanel: FC = () => {
  const [currentHacks, setCurrentHacks] = useState<typeof HACK_CONFIG>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < HACK_CONFIG.length; i++) {
      const hack = HACK_CONFIG[i];
      const timeoutMs = i * 500;

      const timeout = setTimeout(() => {
        setCurrentHacks((prev) => [...prev, hack]);
      }, timeoutMs);

      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className={styles.hackpanel}>
      <div className={styles.topbar}>
        <p>WhoIs_hack v1.6</p>

        {/* 3 dots on top right  */}
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.hacks}>
        {currentHacks.map((hack, index) => {
          return <HackItem key={`hack-${index}`} hack={hack} />;
        })}

        {
          currentHacks.length === HACK_CONFIG.length && (
              <div>
                Go to the projects
              </div>
            )
        }
      </div>
    </div>
  );
};

export { HackPanel };
