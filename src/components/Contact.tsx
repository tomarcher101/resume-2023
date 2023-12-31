import { motion } from "framer-motion";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 sm:my-10 sm:flex-row">
      <div className="flex flex-col justify-center">
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubheader}>Don't be a stranger!</p>
          <h2 className={styles.sectionHeader}>Contact</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1, 1)}
          className="flex flex-col gap-2 text-center mt-4"
        >
          <p className={styles.cardText}>AUS: +61 (0) 427 283 676</p>
          <p className={styles.cardText}>UK: +44 (0) 7508 236582</p>
          <p className={styles.cardText}>
            <a href="mailto:thomastarcher@icloud.com">
              thomastarcher@icloud.com
            </a>
          </p>
          <p className={styles.cardText}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-archer-229598a5/"
            >
              LinkedIn
            </a>
          </p>
          <p className={styles.cardText}>
            <a target="_blank" href="https://github.com/tomarcher101">
              Github
            </a>
          </p>
          <p className={styles.cardText}>
            <a href="/TomArcherCV-20231107_compressed.pdf" target="_blank">
              Download my CV
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
