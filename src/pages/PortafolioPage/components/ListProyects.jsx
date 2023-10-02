import { motion } from "framer-motion";

import {
  desafiosImages,
  gestionImages,
  puzzleImages,
  taskifyImages,
} from "../utils/images";
import { SectionProyect } from "./SectionProyect";

const proyects = [
  {
    images: gestionImages,
    name: "Gestión de pagos",
    subtitle: "Equipo de futbol",
    description: `App fullstack, backend con nodejs + express, MySql como gestor de la base de datos y frontend react, tailwindCSS + vitejs
      En este proyecto tuve la oportunidad de incoroporar servicios de firebase como Cloud Messaging para las notificaciones en tiempo real, y el storage para guardar la imagenes de los jugadores.
      Ademas de implementar autenticación con JWT, roles para cada tipo de usuario, y firebase admin para poder hacer que el backend sea administrador de los servicios de firebase`,

    linkDemo: "https://gestion-real.netlify.app/",
    badges: [
      "html",
      "css",
      "javaScript",
      "react",
      "tailwind",
      "nodejs",
      "express",
      "mySql",
      "firebase",
    ],
  },
  {
    images: taskifyImages,
    name: "Taskify",
    subtitle: "Aplicación de productivdad",
    description: `App fullstack, backend con nodejs + express, MySql como gestor de base de datos y en el frontend react, CUSTOM CSS + vitejs, en esta ocasión implemente JWT para la autenticación. En el frontend implemente Apis de terceros para darle más funcionalidades.
    Permite a los usuarios hacer las operaciones CRUD de tareas
      `,
    linkGithub: "https://github.com/LuisJimenez19/app-fullstack",
    linkDemo: "https://taskifyap.netlify.app/",
    badges: [
      "html",
      "css",
      "javaScript",
      "react",
      "nodejs",
      "express",
      "mySql",
    ],
  },
  {
    images: puzzleImages,
    name: "Rompebezacas",
    subtitle: "Juego de puzzle con un sistema de ranking",
    description: `
    Este proyecto esta desarrollado con React + tailwind y empaquetado con Vitejs, como backend use Firebase y firestore como base de datos para guardar la información y el puntaje de los usuarios.`,
    linkGithub: "https://github.com/LuisJimenez19/rompebezacas",
    linkDemo: "https://rompebezacas.netlify.app/",
    badges: ["html", "css", "javaScript", "react", "tailwind", "firebase"],
  },
  {
    images: desafiosImages,
    name: "Portafolio",
    subtitle: "Desafios Frontend Mentor",
    description:
      "Hecho con HTML, CSS y JS, estan algunos desafios que he hecho",
    linkGithub: "https://github.com/LuisJimenez19/desafios-frontend-mentor",
    linkDemo:
      "https://luisjimenez19.github.io/desafios-frontend-mentor/index.html",
    badges: ["html", "css", "javaScript"],
  },
];

function ListProyects() {
  return (
    <motion.div className=" w-[90%] max-w-[1240px] mx-auto  flex flex-col gap-16 xl:gap-20 pb-14 lg:pb-[200px]">
      {/* CADA PROYECTO */}

      {proyects.map((proyect) => {
        return <SectionProyect proyect={proyect} key={proyect.name} />;
      })}
    </motion.div>
  );
}

export { ListProyects };
