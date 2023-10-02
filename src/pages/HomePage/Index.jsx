import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DefaultLayout } from "../../layouts/DefaultLayout";

import { Hero } from "./components/Hero";
import { ListSocialMedia } from "./components/ListSocialMedia";
import { useState } from "react";
import { SectionContact } from "./components/SectionContact";

function HomePage() {
  const [openSection, setOpenSection] = useState(false);

  return (
    <DefaultLayout>
      <motion.div
        initial={{ opacity: 0, transformBox: "view-box" }}
        animate={{ opacity: 1, transitionDuration: ".2s" }}
        exit={{ opacity: 0 }}
        className={`flex-grow flex  home-page `}
      >
        {/* Link a la página habilidades */}
        {/* <---------IZQUIERDA------------> */}
        <motion.div
          initial={{
            opacity: 0,
            translateX: "-100%",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transitionDuration: ".1s",
            transitionDelay: "50ms",
          }}
          className="grid place-content-center hover:w-[70px] w-[60px]
          lg:w-[120px] lg:hover:w-[130px] shadow-lg  dark:shadow-sky-900   "
        >
          <Link
            to={"/skills"}
            className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all
            
            
            shadow-md -rotate-90"
          >
            <span className="whitespace-nowrap font-bold">
              Habilidades 
            </span>
          </Link>
        </motion.div>
        {/* <---------CENTRO------------> */}
        <div
          className={`flex flex-col items-center justify-center flex-grow
            relative home-page__center ${openSection ? "active" : ""}`}
        >
          {/* CARD */}
          <Hero openSection={openSection} />

          {/* FOOTER */}
          <motion.div
            initial={{
              opacity: 0,
              translateY: "100%",
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              transitionDuration: ".1s",
              transitionDelay: "80ms",
            }}
            transition={{
              delay: 0.2,
            }}
            className="flex justify-around items-center w-full
              h-[60px] lg:h-[120px] lg:hover:h-[150px] shadow-[0_-2px_5px_-3px] max-h-[15pxpx] dark:shadow-sky-900  
            "
          >
            <Link
              to={"/about"}
              className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all "
            >
              <span className="whitespace-nowrap font-bold ">Sobre mi</span>
            </Link>
            <button
              className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
             hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
             transition-all font-bold"
              onClick={() => {
                setOpenSection((prev) => !prev);
              }}
            >
              Contacto
            </button>
          </motion.div>

          {/* Section Contacto */}
          <SectionContact
            openSection={openSection}
            setOpenSection={setOpenSection}
          />
        </div>

        {/* <---------DERECHA------------> */}
        {/* Link a la página portafolio */}
        <motion.div
          initial={{
            opacity: 0,
            translateX: "100%",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transitionDuration: ".1s",
            transitionDelay: "50ms",
          }}
          className="grid place-content-center hover:w-[70px]   w-[60px] 
          lg:w-[120px] lg:hover:w-[130px] shadow-lg  dark:shadow-sky-900  
          "
        >
          <Link
            to={"/portafolio"}
            className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all
         
            rotate-90"
          >
            <span className=" whitespace-nowrap font-bold ">
              Portafolio | Trabajo
            </span>
          </Link>
          <ListSocialMedia />
        </motion.div>
      </motion.div>
    </DefaultLayout>
  );
}

export { HomePage };
