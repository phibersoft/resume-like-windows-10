interface Hack {
  question: string;
  answer: string;
  link?: string;
}

const HACK_CONFIG: Hack[] = [
  {
    question: "Name",
    answer: "Adem UYSAL",
  },
  {
    question: "Age",
    answer: "23",
  },
  {
    question: "Location",
    answer: "Istanbul",
  },
  {
    question: "Work Experience",
    answer: "+3 years as a Fullstack Developer",
  },
  {
    question: "Education",
    answer: `Bachelor's Degree on Computer Engineering at Trakya University`,
  },
  {
    question: "Languages",
    answer: "Turkish (Native), English (B2+)",
  },
  {
    question: "Email",
    answer: "adem-uysal@outlook.com",
    link: "mailto:adem-uysal@outlook.com",
  },
  {
    question: "Github",
    answer: "@phibersoft",
    link: "https://github.com/phibersoft",
  },
  {
    question: "LinkedIn",
    answer: "@adem-uysal",
    link: "https://www.linkedin.com/in/adem-uysal/",
  },
];

export default HACK_CONFIG;
