import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/constants";
import { styles } from "@/styles";
import { motion } from "framer-motion";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  // const [activeNav, setActiveNav] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const middleOfScreen = innerHeight / 2;
  //     console.log(scrollPosition, "scrollPosition");
  //     console.log(window.innerHeight, "innerHeight");
  //     const navHeight = document.querySelector("nav")?.clientHeight;
  //     const sectionPositions = navLinks.map((link) => {
  //       const section = document.querySelector(`#${link.id}`);
  //       if (section) {
  //         return {
  //           id: link.id,
  //           position: section.getBoundingClientRect().top + scrollPosition,
  //         };
  //       }
  //     });
  //     const activeSection = sectionPositions.find(
  //       (section) =>
  //         section.position <= scrollPosition + navHeight! + middleOfScreen &&
  //         section.position + navHeight! > scrollPosition + navHeight!,
  //     );
  //     if (activeSection) {
  //       setActiveNav(activeSection.id);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const variants = {
    menuOpen: { opacity: 1, right: 0 },
    menuClosed: { opacity: 0, right: "-200%" },
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-3 sm:py-4`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link className="flex items-center gap-2 text-2xl font-bold" to="/">
          tom archer
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-md cursor-pointer text-lg font-medium text-secondary transition-colors duration-300 ease-in-out hover:text-white"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="flex items-center justify-end sm:hidden">
        <motion.img
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          src={mobileMenuOpen ? close : menu}
          alt="menu"
          className={`${
            mobileMenuOpen ? "h-6 w-6 " : "h-7 w-7"
          } cursor-pointer object-contain`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <motion.div
          initial="menuClosed"
          animate={mobileMenuOpen ? "menuOpen" : "menuClosed"}
          variants={variants}
          className={`z-999999 absolute right-0 top-12 flex h-screen w-screen justify-end rounded-xl bg-gradient-to-r from-primary to-black p-6`}
        >
          <ul className="flex list-none flex-col items-end justify-start gap-4 text-lg">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-md cursor-pointer font-medium text-secondary transition-colors duration-300 ease-in-out hover:text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
