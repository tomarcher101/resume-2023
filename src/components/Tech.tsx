import SectionWrapper from "@/hoc/SectionWrapper";
import { technologies } from "@/constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/styles";
import { Technology } from "@/types";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()} className="mb-10 sm:mb-20">
        <p className={styles.sectionSubText}>What I like to work with</p>
        <h2 className={styles.sectionHeadText}>My Tech</h2>
      </motion.div>
      <motion.div
        className="flex flex-row flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.5, 0.2)}
      >
        {technologies.map((tech: Technology, index: number) => (
          <div className="h-28 w-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
