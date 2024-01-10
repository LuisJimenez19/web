import { DefaultLayout } from "../../layouts/DefaultLayout";

import { MyDescription } from "./components/MyDescription";

import { useRef, useState } from "react";

import urlVideo from "../../assets/videos/barbaro.mp4";
import { calculateAge } from "../../helpers/calculateAge";

import iconCursor from "../../assets/images/icons-cursor.svg";

function AboutPage() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef();

  function toggleShowVideo() {
    setShowVideo(!showVideo);
  }

  return (
    <DefaultLayout>
      <div
        className=" w-full h-full flex-grow flex  flex-col items-center 
        animate-fade-up animate-duration-200 animate-ease-out bg-black/10
        "
      >
        <h1 className="text-3xl lg:text-5xl  font-righteous">Sobre mí</h1>

        {/* <----card-----> */}
        <div
          className="font-poppins w-[90%] max-w-[1040px] mx-auto  p-5 rounded-xl
        shadow-2xl m-auto
        "
        >
          <div className="flex flex-col lg:flex-row gap-5 relative">
            {showVideo ? (
              <video
                height={400}
                width={300}
                autoPlay
                className=" m-auto rounded-md shadow-2xl animate-jump"
                ref={videoRef}
                src={urlVideo}
                controls
                aria-label="Video que describe la personalidad de Luis Angel Jimenez"
              />
            ) : (
              <MyDescription />
            )}
            <div className="text-lg flex flex-col gap-1 relative ">
              Soy un apasionado del crecimiento personal y la búsqueda constante
              de la mejora, es algo que deseo para todos.
              <p>
                Mi incursión en el mundo del desarrollo surgió de mi deseo de
                experimentar esa sensación de progreso continuo, impulsado por
                mi profundo interés en la tecnología, el razonamiento lógico, la
                creatividad y la resolución de problemas.
              </p>
              <p>
                Actualmente me especializo en el desarrollo web más
                especificamente en el frontend donde acumulo más de{" "}
                {calculateAge("01/06/2022")} año de experiencia, en estos
                momentos me encuentra haciendo la carrera de Desarrollo de
                software en la Universidad Nacional de Cuyo, haciendo trabajos
                como freelance y aprendiendo nuevas tecnologías que unifican
                todas las partes del desarrollo web (Astro, Nextjs, Laravel,
                etc...)
              </p>
              {showVideo && (
                <p
                  /*  initial={{
                    opacity: 0,
                    translateY: "-100%",
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }} */
                  className="animate-fade-down"
                >
                  Me gusta pasar tiempo con mis amigos, jugar al fulbol, la
                  calistenia, el café y hacerme cargo de las cosas que si puedo
                  controlar. 😉
                </p>
              )}
              <button
                aria-label="Muestra u oculta el video que describe la personalidad de Luis Angel Jimenez"
                onClick={toggleShowVideo}
                className={`w-14 h-10 rounded-md absolute  shadow-inner -bottom-3 right-0 
                hover:brightness-110 hover:scale-95 border bg-contain bg-center bg-no-repeat 
                transition-all flex items-center justify-center group ${
                  showVideo ? "bg-rose-700/20" : "bg-emerald-700/20"
                }`}
              >
                <img
                  src={iconCursor}
                  width={40}
                  height={40}
                  className="animate-jump animate-delay-500 group-hover:animate-wiggle group-hover:animate-infinite"
                  alt="icono del cursor"
                />
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export { AboutPage };
