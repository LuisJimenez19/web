import { SectionProject } from "./SectionProject";
import { SkeletonImage } from "./SkeletonImage";

/* import {
  desafiosImages,
  gestionImages,
  puzzleImages,
  taskifyImages,
} from "../utils/images"; */

/* Tenìa este objeto primero, ahora lo puse todo en un JSON */
/* const projects = [
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
]; */

function ListProjects({ projects, loading }) {
  if (loading) {
    return (
      <div className="w-[90%] max-w-[1240px] mx-auto flex flex-col md:flex-row pb-10 ">
        {/* skeleton of text */}
        <div className="p-5 flex flex-col gap-3 flex-1 ">
          <div className="flex flex-col gap-1">
            <p className="p-3 skeleton w-10/12">Aquiva el titulo</p>
            <p className="skeleton w-8/12">Aquiva el subtitulo</p>
          </div>
          <p className="p-2  skeleton">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            neque enim deserunt numquam rerum ducimus commodi hic corporis
            facilis unde deleniti inventore odit tenetur esse facere et officiis
            temporibus, exercitationem ipsum, voluptatibus ex? Alias iure minus
            placeat quae architecto fugiat explicabo asperiores molestias hic
            tenetur eos sint laborum, expedita ex nulla dolore id totam.
            Eligendi mollitia incidunt unde. Illum ut cupiditate a cum libero
            nesciunt, dicta similique eos error magni animi aliquam unde, quis
            ipsa maiores quod ipsum, repudiandae laborum commodi earum nulla
            vitae facere? Adipisci corporis voluptatibus reiciendis? Deserunt
            iusto quasi laudantium quisquam, mollitia possimus soluta ducimus
            earum cupiditate?
          </p>
          {/* Badges */}
          <div className="flex gap-2">
            <span className="py-1 px-3  rounded-md skeleton">asdsdads</span>
            <span className="py-1 px-3  rounded-md skeleton">asdsdads</span>
            <span className="py-1 px-3  rounded-md skeleton">asdsdads</span>
            <span className="py-1 px-3  rounded-md skeleton">asdsdads</span>
          </div>
          {/* Icons */}
          <div className="flex gap-3">
            <span className="p-3 rounded-lg  inline-block skeleton">
              {" "}
              icons{" "}
            </span>
            <span className="p-3 rounded-lg  inline-block skeleton">
              {" "}
              icons
            </span>
          </div>
        </div>

        {/* skeleton of images */}
        <SkeletonImage />
      </div>
    );
  }

  return (
    <div className=" w-[90%] max-w-[1240px] mx-auto  flex flex-col gap-16 xl:gap-20 pb-14 lg:pb-[200px] fade-in  transition-all">
      {/* CADA PROYECTO */}
      {/* Si dejo de cargar y ya hay proyectos */}
      {!loading && projects.length > 0 ? (
        projects.map((project, i) => {
          return (
            <SectionProject
              project={project}
              key={`${project.name}${i.toString()}`}
            />
          );
        })
      ) : (
        /* Si dejo de cargar y no hay proyectos */
        <div>
          Aún no hay proyectos con esas tecnoligías, estamos trabajando en ello
          😉
        </div>
      )}
    </div>
  );
}

export { ListProjects };
