import { FC } from "react";
import PROJECTS_CONFIG from "../project-config";
import styles from "./Projects.module.scss";
import { GithubIcon, NpmIcon } from "../../SVG";
import { TechnologyLabel } from "../../components/common";

const Projects: FC = () => {
  return (
    <>
      {PROJECTS_CONFIG.map((project, index) => {
        return <ProjectItem key={`project-${index}`} {...project} />;
      })}
    </>
  );
};

const ProjectItem: FC<typeof PROJECTS_CONFIG[0]> = ({
  npmLink,
  githubLink,
  status,
  title,
  technologies,
  description,
}) => {
  return (
    <div className={`${styles.item} typewriter`}>
      <h5 className={styles.title}>
        {title} <span className={styles.status}>{status}</span>
      </h5>
      <p className={styles.description}>{description}</p>

      {(npmLink || githubLink) && (
        <div className={styles.link}>
          Published On:{" "}
          {npmLink && (
            <a href={npmLink} target={"_blank"} rel={"noopener noreferrer"}>
              <NpmIcon />
            </a>
          )}
          {githubLink && (
            <a href={githubLink}>
              <GithubIcon />
            </a>
          )}
        </div>
      )}
      <div className={styles.technologies}>
        Technologies:
        {technologies.map((tech, index) => {
          return (
            <TechnologyLabel
              key={`project-tech-${index}-${title}`}
              text={tech}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Projects };
