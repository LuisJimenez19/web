/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import imgAuthor from "../../../assets/images/luis-sin-bg.webp";
import { Background } from "./Background";
import { calculateAge } from "../../../helpers/calculateAge";

import "../css/index.css";
import { useEffect, useRef } from "react";
import { ShowLastVisit } from "../../../components/ShowLastVisit";
import { LinkGradient } from "../../../components/LinkGradient";

function Hero({ openSection = false }) {
  const CARD = useRef();

  const CONFIG = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 32,
    vertical: false,
    opacity: 0,
  };
  useEffect(() => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`flex items-center justify-center w-[99%] lg:w-[95%]  flex-grow relative `}
    >
      <ShowLastVisit />
      {/* CAJA CONTIENE EL TEXTO Y LA IMAGEN */}
      <div
        ref={CARD}
        id="card"
        className={`
                text-center  max-w-[1000px]  m-2
              min-h-[50dvh] p-2
              flex flex-col  md:flex-row 
              md:justify-center md:items-center 
            items-end justify-end
            shadow-2xl
            rounded-[1.5em]
              ${!openSection ? "hero" : "hero-rotate"}
            overflow-hidden relative
              `}
      >
        {/* ---TEXTO--- */}
        <div
          /* initial={{
            translateY: "-100%",
          }}
          animate={{
            translateY: 0,
            transitionDuration: ".2s",
            transitionDelay: ".1s",
          }} */
          className="text-left w-full px-2 flex flex-col gap-1 text-slate-800 dark:text-slate-100
          animate-fade-down animate-once animate-ease-in animate-duration-200
          
          "
        >
          <div className="grow"></div>
          <div>
            <h1
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-righteous whitespace-nowrap  leading-none
            
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
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-mono ">
              Desarrollador Web
            </h2>
          </div>

          <p className="mx-auto text-sm md:text-base">
            +{calculateAge("01/01/2021")} años en el mundo del Desarrollo de
            Software. Actualmente estoy enfocado en el Desarrollo Web.
          </p>

          {/*  <a
            href="https://drive.google.com/file/d/1mqjR4KkoGE3p9A-ASof1j4sWXWbJ3GbU/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="border-linkedin border text-linkedin 
                    dark:border-slate-100 dark:text-slate-50
                    hover:text-slate-50 hover:bg-linkedin hover:border-slate-50
                    dark:hover:bg-slate-50 dark:hover:text-linkedin dark:hover:border-linkedin hover:scale-95 transition-all
            w-max py-2 px-3 rounded-xl text-sm self-center md:self-start  mb-2 
            animate-fade-down animate-once animate-ease-in animate-duration-200 animate-delay-300
            "
          >
            {" "}
            Descargar CV
          </a> */}
          <LinkGradient
            className="animate-fade-down animate-ease-out"
            aria-label="Envia a un documento de google drive en donde esta el curriculum vitae de Luis Ángel Jimenez "
            href={
              "https://drive.google.com/file/d/1mqjR4KkoGE3p9A-ASof1j4sWXWbJ3GbU/view?usp=sharing"
            }
            text="Descargar CV"
          />
        </div>

        {/* IMAGEN */}
        <section className="flex w-full items-center justify-center">
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
              bottom: 200,
              top: 1,
              left: 1,
              right: 1,
            }}
          >
            <img
              className=" w-full md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] block pointer-events-none 
              animate-fade-up
              "
              /*  initial={{
                opacity: 0,
                translateY: "10%",
              }}
              animate={{
                translateY: "0",
                opacity: 1,
                transitionDuration: ".2s",
                transitionDelay: ".1s",
              }}
              exit={{
                opacity: 0,
                translateY: "100%",
              }} */
              src={imgAuthor}
            />
          </motion.div>
        </section>
      </div>
    </section>
  );
}

export { Hero };
