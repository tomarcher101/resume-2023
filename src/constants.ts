import {
  typescript,
  javascript,
  python,
  reactjs,
  redux,
  tailwind,
  nodejs,
  html,
  css,
  threejs,
  git,
  figma,
  docker,
  nextjs,
} from "@/assets/tech";
import { codeCamp, daltonMaag, fireTech, play, plum, akcelo } from "@/assets/companies";
import escapeRoomQuiz from "@/assets/projects/escape-rooms/quiz.png";
import beyondJourney from "@/assets/projects/beyond-assessments/journey.png";
import beyondAchievements from "@/assets/projects/beyond-assessments/achievements.png";
import beyondResults from "@/assets/projects/beyond-assessments/results.png";
import hundoHomepage from "@/assets/projects/hundo/homepage.jpg";
import dedHomepage from "@/assets/projects/ded/homepage.png";
import nephNoteHomepage from "@/assets/projects/nephrotic-notebook/homepage.png";
import nephNoteSplash from "@/assets/projects/nephrotic-notebook/splash.png";
import nephNoteEnter from "@/assets/projects/nephrotic-notebook/enter-reading.png";
import { Experience, NavLink, Project, Technology } from "@/types";

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "about",
    href: "/about",
  },
  {
    id: "work",
    title: "work",
    href: "/work",
  },
  {
    id: "contact",
    title: "contact",
    href: "/contact",
  },
];

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    companyName: "Akcelo (Contract)",
    link: "https://akcelo.com/",
    icon: akcelo,
    iconBg: "#FF1E00",
    iconClass: "h-[75%] w-[75%] rounded-lg",
    date: "December 2023 - Present",
    points: [
      "Working as a Senior Frontend Developer on the McDonald's ANZ project.",
      "Building and maintaining the software used in McDonald's DriveThrus and instore.",
      "Responsibilities include reviewing code and mentoring junior developers",
    ],
  },
  {
    title: "Full Stack Developer (frontend focus)",
    companyName: "PLAY",
    link: "https://play-studio.com",
    icon: play,
    iconBg: "#523FFE",
    iconClass: "h-[70%] w-[70%] rounded-lg",
    date: "June 2021 - October 2023",
    points: [
      "Design and build web and mobile applications, specialising in gamification and web3.",
      "Working across the full stack, but primarily as a front end developer.",
      "Have built projects for a wide range of clients, including PwC, KPMG and hundo.",
      "Mainly using TypeScript/JavaScript, Python, React, NextJS, Node.js.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    companyName: "Dalton Maag",
    link: "https://daltonmaag.com",
    icon: daltonMaag,
    iconBg: "#000013",
    iconClass: "h-[100%] w-[100%] rounded-full",
    date: "April 2020 - June 2021",
    points: [
      "Worked as a web developer, but also as a font developer.",
      "Built many internal tools, including web and CLI applications.",
      "Contributed to some of the most widely used open source font libraries (such as UFO, FontTools and GlyphsLib).",
      "Mainly used Python, TypeScript/JavaScript, Ruby, Vue, Ruby on Rails.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Plum",
    link: "https://withplum.com",
    icon: plum,
    iconBg: "#5F09FF",
    iconClass: "h-[100%] w-[100%] rounded-full",
    date: "Jan 2022 - Jan 2023",
    points: [
      "After completing my MSc, I returned to Plum as a backend software engineer.",
      "Was part of the monetisation team.",
      "Designed and built the investments platform as well as the paid subscription services (Plum Plus and Plum Pro).",
      "Mainly used Python, SQL, Flask, Docker.",
    ],
  },
  {
    title: "Lead Tutor",
    companyName: "Code Camp",
    link: "https://codecamp.com",
    icon: codeCamp,
    iconBg: "#3FC4FF",
    iconClass: "h-[100%] w-[100%] rounded-full",
    date: "Jan 2022 - Jan 2023",
    points: [
      "During my postgrad, worked as a Lead Teacher for Code Camp.",
      "Led a team that taught primary school children the basics of programming and game design using Spark.",
    ],
  },
  {
    title: "Camp Tutor",
    companyName: "Fire Tech Camp",
    link: "https://firetechcamp.com",
    icon: fireTech,
    iconBg: "#FD4D50",
    iconClass: "h-[90%] w-[90%] rounded-full",
    date: "Jan 2022 - Jan 2023",
    points: [
      "During my postgrad, worked as a tutor for Fire Tech Camp.",
      "Taught teenagers programming using Python, as well as game design using Construct.",
      "Was part of a select group that helped test and prepare online tutoring sessions with the goal of teaching children from developing countries how to code.",
    ],
  },
  {
    title: "Operations Intern / Junior Software Engineer",
    companyName: "Plum",
    link: "https://withplum.com",
    icon: plum,
    iconBg: "#5F09FF",
    iconClass: "h-[100%] w-[100%] rounded-full",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Started as an operations intern completing manual operational tasks.",
      "Automated my intern role (self-taught) and was offered a full time role as a junior software developer.",
      "Built the cancellation and onboarding flows of the app, as well as many internal tools.",
      "Wrote parts of a Natural Language Processing bot using the Facebook messenger API.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Campus",
    link: "https://campus.hundo.xyz",
    client: "hundo",
    clientLink: "https://hundo.xyz",
    description: `An online learning platform with the goal of equipping Gen Z with digital skills.
      Built using NextJS and AWS Amplify, with Contenful as the CMS.
      Allowed for metaverse intergration with ThreeJS and ReadyPlayerMe.`,
    imageType: "desktop",
    images: [hundoHomepage],
    tags: [
      "React",
      "NextJS",
      "TypeScript",
      "AWS Amplify",
      "GraphQL",
      "Contentful",
      "ThreeJS",
    ],
  },
  {
    name: "Beyond: Assessments",
    link: "https://kpmg.com/uk/en/home/services/private-enterprise/beyond.html",
    client: "KPMG",
    clientLink: "https://kpmg.com/uk/en/home",
    description:
      "An assessment tool for KPMG’s Beyond platform. A PWA built using NextJS and .NET, leveraging gamification techniques to make the experience more engaging.",
    imageType: "mobile",
    images: [beyondJourney, beyondAchievements, beyondResults],
    tags: ["React", "NextJS", "TypeScript"],
  },
  {
    name: "My Nephrotic Notebook",
    link: "https://www.goshdrive.com/academia#:~:text=MSc%20Project%202019-,My%20Nephrotic%20Notebook%20Mobile%20App,-Parents%20of%20children",
    client: "Great Ormond Street Hospital",
    clientLink: "https://www.gosh.org/",
    description: `Led a team of three that designed and built a mobile application to help children with Nephrotic Syndrome manage their disease.
      The project received top marks in our MSc cohort, was published and showcased by DRIVE at GOSH Conference 2019.
      It also gave me a chance to explore UX/UI design for the first time. Amazingly, I was even [first authoured in a medical journal article!](https://adc.bmj.com/content/104/Suppl_4/A6.2)`,
    imageType: "mobile",
    images: [nephNoteSplash, nephNoteHomepage, nephNoteEnter],
    tags: ["Typescript", "Ionic", "Angular"],
  },
  {
    name: "Virtual Escape Room",
    client: "PwC",
    clientLink: "https://www.pwc.co.uk/",
    description: `A multiplayer point & click game, and an accompanying game creator toolkit.
      Built to be used as both a knowledge check and a team building application.
      The creator tool allowed for the creation of custom escape rooms, with the ability to place and customise assets (in both appearance and behaviour).
      It also allowed for custom quizzes to be inserted into the game, which could then be used as a knoweldge check for the tested topic.
      The game itself had multiplayer sessions, which allowed up to 8 players to collaborate in a room at the same.
      Built using Phaser and React, leveraging web hooks and an authoritative server architecture.`,
    imageType: "desktop",
    images: [escapeRoomQuiz],
    tags: ["React", "Phaser", "TypeScript", "NestJS", "WebSockets"],
  },
  {
    name: "dED Charity Website",
    link: "https://ded1.co",
    client: "Demilitarise Education",
    clientLink: "https://ded1.co",
    description: `Helped a friend build her charity’s website.
      The website allows for users to browse and contribute to a database that tracks university spending.
      Built using NextJS and TailwindCSS on the front end and Django on the back end.
      I oversaw a complete redesign of the front end, while also helping out with designing a new database data model to integrate with the new UX.`,
    imageType: "desktop",
    images: [dedHomepage],
    tags: ["React", "NextJS", "TypeScript", "TailwindCSS", "Python", "Django"],
  },
];
