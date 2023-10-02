/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { DefaultLayout } from "../../layouts/DefaultLayout";

import { ListProyects } from "./components/ListProyects";

function PortafolioPage() {
  return (
    <DefaultLayout>
      {/* Animación de entreada */}
      <motion.div
        initial={{
          translateX: "100%",
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
          transitionDuration: ".15s",
        }}
        exit={{
          translateX: "-100%",
          transitionDuration: "5s",
        }}
        style={{
          background: `linear-gradient(
            90deg,
            rgba(0, 0, 20, 0.2) 60%,
            rgba(0, 0, 20, 0.2)
          )`,
        }}
        className="flex flex-grow flex-col pt-10 gap-5 w-full  "
      >
        <motion.h1
          initial={{
            opacity: 1,
            translateY: -100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-center text-5xl font-righteous"
        >
          Proyectos destacados
        </motion.h1>

        {/* Proyectps */}
        <ListProyects />
      </motion.div>
    </DefaultLayout>
  );
}

export { PortafolioPage };
