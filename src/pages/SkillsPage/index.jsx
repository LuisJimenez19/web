import { lazy } from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
// import { Fieldset } from "./components/Fieldset";
const Fieldset = lazy(() => import("./components/Fieldset"));

import {
  personalQualities,
  skillsBackend,
  skillsFrontend,
  socialQualities,
  workQualities,
} from "./constants/skills";

function SkillsPage() {
  return (
    <DefaultLayout>
      <div
        /*   initial={{
          translateX: "-100%",
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
          background: `linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 0.2)
          )`,

          transitionDuration: ".15s",
        }}
        exit={{
          translateX: "-100%",
          transitionDuration: "5s",
        }} */
        className=" w-full h-full flex-grow flex bg-black/10  flex-col items-center -translate-x-full
        animate-skills
        "
      >
        <h1 className="text-5xl lg:text-6xl  font-righteous">Habilidades</h1>

        {/* SECCION DE HABILIDADES */}
        <div className="font-poppins w-[90%] max-w-[1240px] mx-auto flex flex-wrap justify-around gap-5 ">
          {/* <---------HABILIDADES */}
          <section className="w-full flex flex-wrap flex-col md:flex-row gap-5  justify-center">
            <Fieldset skills={skillsFrontend} legend="Frontend" />
            <Fieldset skills={skillsBackend} legend="Backend" />
          </section>

          {/* <---------CUALIDADES */}
          <h2 className="text-5xl lg:text-6xl  font-righteous ">Cualidades</h2>
          <section className="w-full flex flex-wrap flex-col mb-3 md:flex-row gap-5  ">
            <Fieldset skills={socialQualities} legend="Sociales" />
            <Fieldset skills={workQualities} legend="Laborales" />
            <Fieldset skills={personalQualities} legend="Personales" />
            <p className="font-poppins text-base lg:text-lg">
              El stack con el que más me siento comodo involucra a MySql como
              gestor de bases de datos, Nodejs + express para el backend y en el
              front me gusta mucho usar React y tailwind con vitejs. Aunque he
              trabajado en proyectos con Php, Laravel e Inertia pero en estos
              solo he estado en la parte visual😉
            </p>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
}

export { SkillsPage };
