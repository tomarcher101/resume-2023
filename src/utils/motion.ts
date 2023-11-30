type Direction = "left" | "right" | "up" | "down";
type Type = "spring" | "tween" | "inertia";
type Ease =
  | "anticipate"
  | "backIn"
  | "backOut"
  | "backInOut"
  | "circIn"
  | "circOut"
  | "circInOut"
  | "easeIn"
  | "easeOut"
  | "easeInOut";

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay || 0.5,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  delay?: number,
  duration?: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: Type,
  ease: Ease,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-200%" : direction === "right" ? "200%" : 0,
      y: direction === "up" ? "200%" : direction === "down" ? "200%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: ease,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.5,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
