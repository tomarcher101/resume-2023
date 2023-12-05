import { styles } from "@/styles";
import { experiences } from "@/constants";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { Experience as TExperience } from "@/types";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceCardProps {
  date: string;
  iconBg: string;
  link: string;
  icon: string;
  companyName: string;
  iconClass: string;
  title: string;
  points: string[];
}

const ExperienceCard = ({
  date,
  iconBg,
  link,
  icon,
  companyName,
  iconClass,
  title,
  points,
}: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "rgba(29,24,54,0.6)", color: "white" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <a
        className="flex h-full w-full items-center justify-center hover:opacity-50"
        href={link}
        target="_blank"
      >
        <img
          src={icon}
          alt={companyName}
          className={`h-[60%] w-[60%] object-contain ${iconClass}`}
        />
      </a>
    }
  >
    <div>
      <h3 className="text-6 font-bold text-white">{title}</h3>
      <a
        className="text-4 !m-0 font-open !font-semibold text-secondary hover:text-[#ff6b6b]"
        href={link}
        target="_blank"
      >
        {companyName}
      </a>
    </div>
    <ul className="mt-5 flex list-disc flex-col gap-2 space-y-2 px-5">
      {points.map((point: string, index: number) => (
        <li key={index} className={`list-dash ${styles.cardText}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "all" }}
        variants={textVariant()}
        className="sm:mt-30"
      >
        <p className={styles.sectionSubText}>My journey so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10"
      >
        <VerticalTimeline>
          {experiences.map((experience: TExperience, index: number) => (
            <ExperienceCard
              key={index}
              date={experience.date}
              iconBg={experience.iconBg}
              link={experience.link}
              icon={experience.icon}
              companyName={experience.companyName}
              iconClass={experience.iconClass}
              title={experience.title}
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
