import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";

const variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const SectionWrapper =
  (Component: React.FC, idName: string, fullscreen?: boolean) =>
  (props: any) => (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl box-border`}
      id={idName}
    >
      <Component {...props} />
    </motion.section>
  );

export default SectionWrapper;
