import { FC } from "react";
import { List } from "../../components/List";

const Biography: FC = () => {
  return (
    <div>
      <p className={"typewriter"} style={{ marginBottom: "15px" }}>
        Hi, my name is Adam. Here is a little summary about me:{" "}
      </p>
      <List
        items={[
          "Age: 23",
          "Location: Istanbul",
          "Work Experience: +3 years",
          "Education: Bachelor's Degree on CE at Trakya Univ.",
          "Languages: Turkish (Native), English (B2+)",
          "Main Techs: Typescript, React, NextJS, NodeJS, PostgreSQL, Redux, GCP",
          "Junior Techs: Python, NestJS, Docker, Selenium",
          <>
            Email:{" "}
            <a href={"mailto:adem-uysal@outlook.com"}>adem-uysal@outlook.com</a>
          </>,
          <>
            Github: <a href={"https://github.com/phibersoft"}>@phibersoft</a>
          </>,
          <>
            LinkedIn:{" "}
            <a href={"https://www.linkedin.com/in/adem-uysal/"}>Adem Uysal</a>
          </>,
        ]}
      />
    </div>
  );
};

export { Biography };
