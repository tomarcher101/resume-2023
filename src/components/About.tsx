import { motion } from "framer-motion";
import { styles } from "@/styles";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import Avatar from "./three-js/Avatar";
import SectionWrapper from "@/hoc/SectionWrapper";

const About = () => {
  return (
    <div className="flex flex-col justify-between sm:my-10 sm:h-full sm:flex-row">
      <div className="flex flex-col justify-center pb-8 sm:w-[60%] sm:pb-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubheader}>Introduction</p>
          <h2 className={styles.sectionHeader}>About Me</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", 0.1, 1)}
          className="text-md mt-4 max-w-3xl leading-6 text-secondary sm:text-xl sm:leading-8"
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
      <div className="static flex w-full items-center sm:w-[40%]">
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
