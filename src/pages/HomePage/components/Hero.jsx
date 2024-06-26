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

  /* Habilitar ciertas funcionalidades */
  const isDesktop = window.innerWidth > 767;

  useEffect(() => {
    if (isDesktop) {
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
      const copyCard = CARD.current;
      if (copyCard) {
        copyCard.addEventListener("pointermove", UPDATE);

        return () => {
          copyCard.removeEventListener("pointermove", UPDATE);
        };
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-center w-[99%] lg:w-[95%]  flex-grow relative `}
    >
      <a
        href="https://www.luis-dev.pro"
        className=" font-poppins underline underline-offset-4 hover:underline-offset-2 hover:scale-105 transition-all group fade-in  flex items-start gap-1 "
      >
        <p className=" block group-hover:text-purple-300">Nueva versión disponible</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 group-hover:scale-120 group-hover:text-purple-300 transition-all"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />{" "}
        </svg>
      </a>
      <ShowLastVisit />
      {/* CAJA CONTIENE EL TEXTO Y LA IMAGEN */}
      <div
        ref={CARD}
        id="card"
        className={`
                text-center  max-w-[1000px]  m-2
              min-h-[50vh] p-2
              flex flex-col  md:flex-row 
              md:justify-center md:items-center 
            items-end justify-end
            shadow-2xl
            rounded-[1.5em]
              ${!openSection ? "hero" : "hero-rotate"}
            overflow-hidden relative
              `}
      >
        <div className="glows"></div>
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
            +{calculateAge("01/06/2021")} años en el mundo del Desarrollo de
            Software. Actualmente estoy enfocado en el Desarrollo Web.
          </p>

          <LinkGradient
            className="animate-fade-down animate-ease-out"
            aria-label="Enlace para descargar el curriculul de Luis Ángel Jimenez"
            href={
              "https://drive.google.com/file/d/1iVOqrgMbOPD6JJoloW486MGcuqaHLMY3/view"
            }
            text="Descargar CV"
          />
        </div>

        {/* IMAGEN */}
        <section className="flex w-full items-center justify-center ">
          {/* DETRAS DE LA FOTO */}
          {isDesktop && <Background className={"absolute "} />}

          <motion.div
            className="align-bottom flex md:items-center items-end justify-center select-none md:cursor-grab md:active:cursor-grabbing relative  overflow-hidden

            w-[220px] h-[293px] 
            sm:w-[270px] sm:h-[420px]
            md:w-[290px] md:h-[440px]
            lg:w-[370px] lg:h-[500px]
            xl:w-[390px] xl:h-[520px]

            max-w-[390px] max-h-[520px]
           
            bg-slate-300 
            dark:bg-dark-blue
            shadow-xl
            rounded-xl
                "
            drag={isDesktop}
            dragElastic
            dragConstraints={{
              bottom: 200,
              top: 1,
              left: 1,
              right: 1,
            }}
          >
            <div
              className="absolute top-0 h-full w-full bg-slate-300 dark:bg-dark-blue 
              dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-5%,rgba(120,119,198,0.6)_10%,rgba(120,119,198,0.4),rgba(120,119,198,0.3)_30%,rgba(255,255,255,0))]

              bg-[radial-gradient(ellipse_80%_90%_at_50%_-5%,rgb(255,190,242,0.8),rgba(255,255,255,0.5))] 


            animate-fade-down animate-duration-[2000ms]
            "
            ></div>

            <img
              loading="eager"
              width={100}
              height={100}
              alt="Foto animada de Luis Angel Jimenez"
              className=" w-full md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] block pointer-events-none animate-fade-up"
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
