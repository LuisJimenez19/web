/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import imgAuthor from "../../../assets/images/luis-sin-bg.png";
import { Background } from "./Background";
import { calculateAge } from "../../../helpers/calculateAge";
function Hero({ openSection = false }) {
  return (
    <section
      className="flex items-center justify-center flex-grow
            w-[98%]
            relative 
            "
    >
      {/* CAJA CONTIENE EL TEXTO Y LA IMAGEN */}
      <motion.div
        className={`
                text-center  w-full max-w-[1000px] overflow-hidden
              min-h-[60vh] p-2
              flex flex-col  md:flex-row 
              md:justify-center md:items-center 
            items-end justify-end
            shadow-2xl
            rounded-[1.5em]
            dark:border-light-cyan
              ${!openSection ? "hero" : "hero-rotate"}
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
          className=" text-left px-3 flex flex-col gap-1"
        >
          <div>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-righteous whitespace-nowrap">
              Hola, Soy Luis Ángel👋🏽
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-mono">
              Desarrollador web
            </h2>
          </div>
          <p className="mx-auto">
            +{calculateAge("01/06/2021")} años en el mundo del desarrollo de
            software. Actualmente estoy enfocado en el desarrollo web.
          </p>
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
              className="md:max-w-[300px] lg:max-w-[350px] xl:max-w-[420px] block pointer-events-none "
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
