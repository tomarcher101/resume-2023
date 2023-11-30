import { styles } from "@/styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative mx-auto h-screen w-full snap-center"
    >
      <div className="absolute inset-0 top-[80px] sm:top-0 mx-auto flex max-w-7xl items-center justify-center sm:justify-start gap-5 px-6 py-3 sm:px-16 sm:py-6">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className={`text-white ${styles.heroHeadText}`}
          >
            Hi, I'm <span className="text-[#5fb3c0]">Tom</span>
          </motion.h1>
          <motion.p
            initial={{ x: "-300%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.2, type: "spring" }}
            className={`${styles.heroSubText} mt-3 hidden sm:block`}
          >
            a full-stack software developer
          </motion.p>
          <motion.p
            initial={{ x: "-300%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.1, duration: 0.2, type: "spring" }}
            className={`${styles.heroSubText} hidden sm:block`}
          >
            with a passion for web and front end!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
