import { motion } from "framer-motion";
import {
  FrontendMentorIcon,
  GithubIcon,
  GmailIcon,
  LikedinIcon,
} from "../../../icons/Icons";

function ListSocialMedia() {
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
      {/* <-----------------------FRONTEND MENTOR --------------------> */}
      <motion.li
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
          delay: 0.7,
        }}
      >
        <a
          href="https://www.frontendmentor.io/profile/LuisJimenez19"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <FrontendMentorIcon
            className="
      w-10 h-10 rounded-full
      p-1 
      cursor-pointer
      border-gray-500
     border
     stroke-gray-500
       dark:hover:border-[#fff]
      hover:border-black shadow-lg
      hover:bg-[#fff]
       transition-all"
          />
        </a>
      </motion.li>

      {/*<--------------- GIT HUB ---------------------> */}
      <motion.li
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
          delay: 0.5,
        }}
      >
        <a
          rel="noreferrer"
          href="https://github.com/LuisJimenez19"
          target="_blank"
        >
          {" "}
          <GithubIcon
            className="
      w-10 h-10 rounded-full
      p-1 
      cursor-pointer
      border-gray-500
      stroke-gray-500 hover:stroke-black border
      dark:hover:stroke-light-cyan dark:hover:border-lime-200
      hover:border-black shadow-lg
      
       transition-all"
          />
        </a>
      </motion.li>

      {/*<--------------- GMAIL ---------------------> */}
      <motion.li
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
          delay: 0.4,
        }}
      >
        <a href="mailto:luisjian948@gmail.com" target="_blank" rel="noreferrer">
          <GmailIcon
            className="
            w-10 h-10 rounded-full
            p-1 
            cursor-pointer
      border-gray-500
      stroke-gray-500  border
      hover:stroke-rose-600 hover:border-green-600
      hover:bg-white
      shadow-lg
      
      transition-all"
          />
        </a>
      </motion.li>

      {/*<--------------- LINKEDIN ---------------------> */}
      <motion.li
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
          delay: 0.3,
        }}
      >
        <a
          href="https://www.linkedin.com/in/luis-jim%C3%A9nez-90a859250/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <LikedinIcon
            className="
      w-10 h-10 rounded-full
      p-1 
      cursor-pointer
      border-gray-500
      stroke-gray-500 hover:stroke-[#fff] border
       dark:hover:border-[#fff]
      hover:border-black shadow-lg
      hover:bg-[#0a66c2]
       transition-all"
          />
        </a>
      </motion.li>

      {/* LINEA */}
      <li className="border border-dark-blue dark:border-slate-200 w-[2px] mx-auto h-[100px]"></li>
    </motion.ul>
  );
}

export { ListSocialMedia };
