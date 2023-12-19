/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import imgAuthor from "../../../assets/images/luis-sin-bg.png";
import { Background } from "./Background";
import { calculateAge } from "../../../helpers/calculateAge";

import "../css/index.css";
import { useEffect, useRef } from "react";
import { ShowLastVisit } from "../../../components/ShowLastVisit";

function Hero({ openSection = false }) {
  const CARD = useRef();

  useEffect(() => {
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      // get the angle based on the center point of the card and pointer position

      // Check the card against the proximity and then start updating
      const CARD_BOUNDS = CARD?.current?.getBoundingClientRect();
      // Get distance between pointer and outerbounds of card
      if (
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        // If within proximity set the active opacity
        CARD.current.style.setProperty("--active", 1);
      } else {
        CARD.current.style.setProperty("--active", CONFIG.opacity);
      }
      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];
      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      CARD.current.style.setProperty("--start", ANGLE + 90);
    };

    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, []);

  return (
    <section
      className={`flex items-center justify-center flex-grow
      w-[98%]
      relative `}
    >
      <ShowLastVisit />
      {/* CAJA CONTIENE EL TEXTO Y LA IMAGEN */}
      <motion.div
        ref={CARD}
        id="card"
        className={`
                text-center  w-full max-w-[1000px] 
              min-h-[50dvh] p-2
              flex flex-col  md:flex-row 
              md:justify-center md:items-center 
            items-end justify-end
            shadow-2xl
            rounded-[1.5em]
            dark:border-light-cyan
              ${!openSection ? "hero" : "hero-rotate"}
            overflow-hidden relative
              `}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
      >
        <motion.div
          initial={{
            translateY: "-100%",
          }}
          animate={{
            translateY: 0,
            transitionDuration: ".2s",
            transitionDelay: ".1s",
          }}
          className=" text-left px-3 flex flex-col gap-1 text-slate-800 dark:text-slate-100"
        >
          <div className="grow"></div>
          <div>
            <h1
              className="text-2xl md:text-3xl lg:text-5xl font-righteous whitespace-nowrap  
            
            "
            >
              <span
                className="dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] 
                bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
              dark:from-gray-900 dark:via-indigo-200 dark:to-gray-900
          
        
              bg-clip-text text-transparent"
              >
                Hola, Soy Luis Ángel
              </span>
              👋🏽
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-mono">
              Desarrollador Web
            </h2>
          </div>
          <p className="mx-auto">
            +{calculateAge("01/01/2021")} años en el mundo del Desarrollo de
            Software. Actualmente estoy enfocado en el Desarrollo Web.
          </p>
          <motion.a
            initial={{
              opacity: 0,
              translateY: "-100%",
              scale: 0,
            }}
            animate={{
              opacity: 1,
              translateY: "0",
              scale: 1,
              transitionDelay: "1s",
            }}
            href="https://drive.google.com/file/d/1mqjR4KkoGE3p9A-ASof1j4sWXWbJ3GbU/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="border-linkedin border text-linkedin 
                    dark:border-slate-100 dark:text-slate-50
                    hover:text-slate-50 hover:bg-linkedin hover:border-slate-50
                    dark:hover:bg-slate-50 dark:hover:text-linkedin dark:hover:border-linkedin hover:scale-95 transition-all
            w-max py-2 px-3 rounded-xl text-sm self-center md:self-start  mb-2"
          >
            {" "}
            Descargar CV
          </motion.a>
        </motion.div>

        {/* IMAGEN */}
        <motion.section className="flex  flex-grow w-full items-center justify-center">
          {/* DETRAS DE LA FOTO */}
          <Background className={"absolute "} />

          <motion.div
            className="align-bottom flex md:items-center items-end justify-center cursor-grab active:cursor-grabbing relative  
              
                dark:bg-dark-blue
                  bg-slate-300
                  shadow-xl
                  rounded-xl
                "
            drag
            dragElastic
            dragConstraints={{
              bottom: 300,
              top: 1,
              left: 1,
              right: 1,
            }}
          >
            <motion.img
              className="md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] block pointer-events-none "
              initial={{
                opacity: 0,
                translateY: "10%",
              }}
              animate={{
                translateY: "0",
                opacity: 1,
                transitionDuration: ".2s",
                transitionDelay: ".1s",
                animationFillMode: "both",
              }}
              exit={{
                opacity: 0,
                translateY: "100%",
              }}
              src={imgAuthor}
            />
          </motion.div>
        </motion.section>
      </motion.div>
    </section>
  );
}

export { Hero };
