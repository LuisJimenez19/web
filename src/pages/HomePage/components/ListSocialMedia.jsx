import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { socialIcons } from "../constants/socialIcons";

function ListSocialMedia() {
  const [heigth, setHeigth] = useState(window.innerHeight);

  useEffect(() => {
    const updateState = () => {
      setHeigth(window.innerHeight);
    };
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return (
    <motion.ul
      initial={{
        translateY: "100%",
      }}
      animate={{
        translateY: 0,
        transitionDuration: ".2s",
        transitionDelay: ".2s",
      }}
      className="absolute bottom-0 right-2 lg:right-10 flex flex-col gap-1 "
    >
      {socialIcons.map((social) => {
        return (
          <motion.li
            className={`${heigth > 600 ? "w-10 h-10" : "w-8 h-8"}`}
            key={social.link}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transitionDuration: ".2s",
              transitionDelay: ".3s",
            }}
            transition={{
              delay: social.delay,
            }}
          >
            <a href={social.link} rel="noreferrer" target="_blank">
              {social.icon}
            </a>
          </motion.li>
        );
      })}

      {/* LINEA */}
      <li
        className={`border flex-grow border-dark-blue dark:border-slate-200 w-[0.1em] mx-auto 
      ${heigth > 749 ? "h-20" : "h-0"}
      `}
      ></li>
    </motion.ul>
  );
}

export { ListSocialMedia };
