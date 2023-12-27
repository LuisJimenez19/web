import { Link } from "react-router-dom";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { Hero } from "./components/Hero";
import { ListSocialMedia } from "./components/ListSocialMedia";
import { useState } from "react";
import { SectionContact } from "./components/SectionContact";

function HomePage() {
  const [openSection, setOpenSection] = useState(false);

  return (
    <DefaultLayout>
      <div className={`flex-grow flex  home-page `}>
        {/* Link a la página habilidades */}
        {/* <---------IZQUIERDA------------> */}

        <div
          /*  initial={{
            opacity: 0,
            translateX: "-100%",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transitionDuration: ".1s",
            transitionDelay: "50ms",
          }} */
          className="grid place-content-center hover:w-[70px] w-[60px]
          lg:w-[120px] lg:hover:w-[130px] shadow-lg  dark:shadow-sky-900 transition-all animate-fade-right animate-duration-100
          
          "
        >
          <Link
            aria-label="Enlace a las habilidades de Luis Angel Jimenez"
            to={"/skills"}
            className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all
              
            
            shadow-md -rotate-90"
          >
            <span className="whitespace-nowrap font-bold">Habilidades</span>
          </Link>
        </div>
        {/* <---------CENTRO------------> */}

        <div
          className={`flex flex-col items-center justify-center w-[90%]  overflow-hidden
            relative home-page__center ${openSection ? "active" : ""}`}
        >
          {/* CARD */}
          <Hero openSection={openSection} />

          {/* FOOTER */}
          <div
            className="flex justify-around items-center w-full
              h-[60px]  lg:h-[120px] lg:hover:h-[150px] shadow-[0_-2px_5px_-3px] max-h-[15pxpx] dark:shadow-sky-900  
              animate-fade-up animate-duration-200 transition-all
            "
          >
            <Link
              aria-label="Enlace a la informacion de Luis Angel Jimenez"
              to={"/about"}
              className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all "
            >
              <span className="whitespace-nowrap font-bold ">Sobre mi</span>
            </Link>
            <button
              className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
             hover:shadow-xl shadow-dark-grayish-blue hover:scale-110 transition-all
             font-bold"
              onClick={() => {
                setOpenSection((prev) => !prev);
              }}
            >
              Contacto
            </button>
          </div>

          {/* Section Contacto */}
          <SectionContact
            openSection={openSection}
            setOpenSection={setOpenSection}
          />
        </div>

        {/* <---------DERECHA------------> */}
        {/* Link a la página portafolio */}
        <div
          /*  initial={{
            opacity: 0,
            translateX: "100%",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transitionDuration: ".1s",
            transitionDelay: "50ms",
          }} */

          className="grid place-content-center hover:w-[70px]  w-[60px] 
          lg:w-[120px] lg:hover:w-[130px] shadow-lg transition-all relative  dark:shadow-sky-900
          animate-fade-left animate-duration-200
          "
        >
          <Link
            aria-label="Enlace al portafolio y los trabajos hechos de Luis Angel Jimenez"
            to={"/portafolio"}
            className=" border border-dark-blue dark:border-light-cyan border-dashed p-2 hover:border-solid 
            hover:shadow-xl shadow-dark-grayish-blue hover:scale-110
            transition-all rotate-90 "
          >
            <span className=" whitespace-nowrap font-bold ">
              Portafolio | Trabajo
            </span>
          </Link>

          <ListSocialMedia />
        </div>
      </div>
    </DefaultLayout>
  );
}

export { HomePage };
