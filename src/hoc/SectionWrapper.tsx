import React from "react";
import { motion } from "framer-motion";

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
      className="relative z-0 box-border max-w-7xl px-6 py-16 sm:px-16 overflow-hidden w-full"
      id={idName}
    >
      <Component {...props} />
    </motion.section>
  );

export default SectionWrapper;
