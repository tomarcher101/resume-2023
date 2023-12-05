import { styles } from "@/styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex h-screen w-full max-w-7xl items-center justify-center px-6 sm:px-16 xl:justify-start">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className={`font-open text-[40px] font-black  text-white xs:text-[50px] sm:text-[60px] lg:text-[100px] lg:leading-[98px]`}
        >
          Hi, I'm <span className="text-[#5fb3c0]">Tom</span>
        </motion.h1>
        <motion.p
          initial={{ x: "-300%" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 0.2, type: "spring" }}
          className={`mt-3 hidden text-[16px] font-medium text-[#dfd9ff] xs:text-[20px] sm:block sm:text-[26px] lg:text-[30px] lg:leading-[40px]`}
        >
          a full-stack software developer
        </motion.p>
        <motion.p
          initial={{ x: "-300%" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.1, duration: 0.2, type: "spring" }}
          className={`hidden text-[16px] font-medium text-[#dfd9ff] xs:text-[20px] sm:block sm:text-[26px] lg:text-[30px] lg:leading-[40px]`}
        >
          with a passion for web and front end!
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
