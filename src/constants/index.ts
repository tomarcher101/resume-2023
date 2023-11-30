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
} from "@/assets/tech";
import { codeCamp, daltonMaag, fireTech, play, plum } from "@/assets/companies";
import escapeRoomQuiz from "@/assets/projects/escape-rooms/quiz.png";
import beyondJourney from "@/assets/projects/beyond-assessments/journey.png";
import beyondAchievements from "@/assets/projects/beyond-assessments/achievements.png";
import beyondResults from "@/assets/projects/beyond-assessments/results.png";
import hundoHomepage from "@/assets/projects/hundo/homepage.jpg";
import dedHomepage from "@/assets/projects/ded/homepage.png";

interface NavLink {
  id: string;
  title: string;
  href: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Experience {
  title: string;
  companyName: string;
  link: string;
  icon: string;
  iconBg: string;
  iconClass: string;
  date: string;
  points: string[];
}

interface Project {
  name: string;
  client: string;
  description: string;
  imageType: "mobile" | "desktop";
  images: string[];
}

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
    title: "Full Stack Engineer (frontend focus)",
    companyName: "PLAY",
    link: "https://play-studio.com",
    icon: play,
    iconBg: "#523FFE",
    iconClass: "h-[70%] w-[70%] rounded-lg",
    date: "June 2021 - Present",
    points: [
      "Design and build web and mobile applications, specialising in gamification and web3.",
      "Working across the full stack, but primarily as a front end developer.",
      "Have built projects for a wide range of clients, including PwC, KPMG and hundo.",
      "Mainly using TypeScript/JavaScript, Python, React, NextJS, Node.js.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Dalton Maag",
    link: "https://daltonmaag.com",
    icon: daltonMaag,
    iconBg: "#000013",
    iconClass: "h-[90%] w-[90%] rounded-full",
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
    iconClass: "h-[90%] w-[90%] rounded-full",
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
    iconClass: "h-[90%] w-[90%] rounded-full",
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
    iconClass: "h-[90%] w-[90%] rounded-full",
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
    client: "hundo",
    description:
      "A online learning platform with goal of equipping Gen Z with digital skills.",
    imageType: "desktop",
    images: [hundoHomepage],
  },
  {
    name: "Virtual Escape Room",
    client: "PwC",
    description:
      "A multiplayer point and click Escape Room game and accompanying game creator tool. Built using Phaser and React, leveraging web hooks and an authoritative server architecture.",
    imageType: "desktop",
    images: [escapeRoomQuiz],
  },
  {
    name: "Beyond: Assessments",
    client: "KPMG",
    description:
      "An assessment tool for KPMG’s Beyond platform. A PWA built using NextJS, .NET and Azure Cloud Services, leveraging gamification techniques to make the experience more engaging.",
    imageType: "mobile",
    images: [beyondJourney, beyondAchievements, beyondResults],
  },
  {
    name: "dED Charity Website",
    client: "Demilitarise Education",
    description:
      "Helped a friend build her charity’s website. Oversaw a redesign, taking responsibility for the front end.",
    imageType: "mobile",
    images: [dedHomepage],
  },
];
