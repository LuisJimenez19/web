/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { DefaultLayout } from "../../layouts/DefaultLayout";

import { ListProjects } from "./components/ListProjects";
import { useEffect, useRef, useState } from "react";
import { FormFilter } from "./components/FormFilter";

function PortafolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const INITIAL_PROJECTS = useRef();

  const [tecnologiesForFilter, setTecnologiesForFilter] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        INITIAL_PROJECTS.current = data.projects;
        const tecnologies = getTecnologies(data.projects);
        setTecnologiesForFilter(tecnologies);
      })

      .catch((e) => console.log(e))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  }, []);

  /* Obtener todos los badges así sabemos que tecnologías */
  function getTecnologies(arr) {
    const tecnologies = arr.reduce((badges, project) => {
      return badges.concat(project.badges);
    }, []);
    return Array.from(new Set(tecnologies));
  }

  /* Filtrar proyectos, le llega un arreglo de palabras*/
  function filterForTecnologies(words) {
    if (words.length === 0) {
      return setProjects(INITIAL_PROJECTS.current);
    }

    // filtramos todos los proyectos
    const projectsFiltered = INITIAL_PROJECTS.current.filter((project) => {
      // que ambas palabras esten presentes en el badges de cada proyecto
      return words.every((word) =>
        project.badges.some(
          (badge) => badge.toLowerCase() === word.toLowerCase()
        )
      );
    });

    setProjects(projectsFiltered);
  }

  return (
    <DefaultLayout>
      {/* Animación de entreada */}
      <motion.div
        key="portafolio"
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
            translateX: -100,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-center text-5xl font-righteous"
        >
          Proyectos destacados
        </motion.h1>
        {/* Filtrar proyectos por las tecnologías que usa */}

        {tecnologiesForFilter.length > 0 && (
          <FormFilter
            tecnologiesForFilter={tecnologiesForFilter}
            filterForTecnologies={filterForTecnologies}
          />
        )}

        {/* Proyectps */}
        <ListProjects projects={projects} loading={loading} />
      </motion.div>
    </DefaultLayout>
  );
}

export { PortafolioPage };
