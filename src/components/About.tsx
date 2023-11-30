import { motion } from "framer-motion";
import { styles } from "@/styles";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import Avatar from "./canvas/Avatar";
import SectionWrapper from "@/hoc/SectionWrapper";

const About = () => {
  return (
    <div className="flex flex-col justify-between sm:my-10 sm:flex-row sm:h-full">
      <div className="flex sm:w-[60%] flex-col justify-center sm:pb-20 pb-8">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", 0.1, 1)}
          className="text-5 mt-4 max-w-3xl leading-8 text-secondary"
        >
          I'm a software engineer based in Melbourne, currently working as a
          Full Stack Developer (frontend focused) at{" "}
          <a href="https://play-studio.com" className="font-bold text-white">
            PLAY
          </a>
          . I'm passionate about building products that make a positive impact
          on people's lives and am always looking for opportunities to learn new
          things!
        </motion.p>
      </div>
      <div className="relative flex sm:w-[40%] items-center">
        <motion.div
          className="aspect-square w-full"
          variants={slideIn("right", "spring", "easeIn", 0.5, 1)}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
