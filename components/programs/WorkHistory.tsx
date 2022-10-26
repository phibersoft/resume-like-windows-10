import { FC } from "react";
import WORK_HISTORY_CONFIG from "../../config/work-history-config";
import styles from "./WorkHistory.module.scss";

const WorkHistory: FC = () => {
  return (
    <>
      {WORK_HISTORY_CONFIG.map((work, index) => {
        return <WorkItem key={`work-history-${index}`} {...work} />;
      })}
    </>
  );
};

const WorkItem: FC<typeof WORK_HISTORY_CONFIG[0]> = ({
  title,
  company,
  type,
  startDate,
  endDate,
  description,
  technologies,
}) => {
  return (
    <div className={`${styles.item} typewriter`}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.subtitle}>
        <p className={styles.company}>{company}</p>
        <p className={styles.type}>{type}</p>
        <p className={styles.date}>
          {startDate} - {endDate}
        </p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => {
          return (
            <span key={`work-history-tech-${index}-${company}`}>{tech}</span>
          );
        })}
      </div>
    </div>
  );
};

export { WorkHistory };
