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
  (Component: React.FC, idName: string) => (props: any) => (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-0 mx-auto box-border max-w-7xl px-6 py-6 sm:px-16 sm:py-16"
      id={idName}
    >
      <Component {...props} />
    </motion.section>
  );

export default SectionWrapper;
