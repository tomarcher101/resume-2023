import { styles } from "@/styles";
import { projects } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Markdown from "react-markdown";
import { Project } from "@/types";

const ProjectCard = ({
  index,
  name,
  link,
  clientLink,
  client,
  description,
  images,
  imageType,
  tags,
  rightSide,
}: Project & { index: number; rightSide?: boolean }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", rightSide && index === 0 ? 0.25 : 0, 1)}
      className="flex flex-col justify-between gap-5 rounded-2xl bg-card p-8"
    >
      <div>
        <a href={link} target="_blank">
          <h3 className="font-open text-2xl font-bold text-white">{name}</h3>
        </a>
        <a href={clientLink} target="_blank">
          <p className="font-tech text-xl text-secondary">{client}</p>
        </a>
        <Markdown
          className={`${styles.cardText} markdown project-description mt-3`}
        >
          {description}
        </Markdown>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-black"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-evenly gap-4">
        {images.map((image: string, index: number) => (
          <Tilt tiltReverse className="hover:z-[9999]" key={index}>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: imageType === "mobile" ? 1.5 : 1.2 }}
            >
              <img
                src={image}
                alt={name}
                className="max-h-[400px] rounded-md border border-solid border-secondary bg-primary object-contain"
              />
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const firstColLength = Math.ceil(projects.length / 2);
  const projects1 = projects.slice(0, firstColLength);
  const projects2 = projects.slice(firstColLength, projects.length);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubheader}>My Work</p>
        <h2 className={styles.sectionHeader}>Projects</h2>
      </motion.div>
      <div className="mt-12 flex flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-col flex-wrap items-center gap-4 lg:w-1/2">
          {projects1.map((project: Project, index: number) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <div className="flex w-full flex-col flex-wrap items-center gap-4 lg:w-1/2">
          {projects2.map((project: Project, index: number) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              rightSide
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
