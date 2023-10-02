import { DefaultLayout } from "../../layouts/DefaultLayout";
import { motion } from "framer-motion";

import { MyDescription } from "./components/MyDescription";

import { useRef, useState } from "react";

import urlVideo from "../../assets/videos/barbaro.mp4";
import { calculateAge } from "../../helpers/calculateAge";

function AboutPage() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef();

  function toggleShowVideo() {
    setShowVideo(!showVideo);
  }

  return (
    <DefaultLayout>
      <motion.div
        layout
        key="PáginaAboutMe"
        initial={{
          translateY: "100%",
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          background: `linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 0.2)
          )`,

          transitionDuration: ".15s",
        }}
        exit={{
          translateY: "100%",
          transitionDuration: "5s",
        }}
        className=" w-full h-full flex-grow flex  flex-col items-center "
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
              <motion.video
                initial={{
                  opacity: 0,

                  translateY: "10px",
                }}
                animate={{
                  opacity: 1,

                  translateY: 0,
                }}
                height={400}
                width={300}
                autoPlay
                className=" m-auto rounded-md shadow-2xl"
                ref={videoRef}
                src={urlVideo}
                controls
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
                <motion.p
                  initial={{
                    opacity: 0,
                    translateY: "-100%",
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}
                >
                  Me gusta pasar tiempo con mis amigos, jugar al fulbol, la
                  calistenia, el café y hacerme cargo de las cosas que si puedo
                  controlar. 😉
                </motion.p>
              )}
              <button
                onClick={toggleShowVideo}
                className={`w-10 h-5 rounded-3xl absolute  shadow-inner bottom-2 right-0 
                hover:brightness-110 hover:scale-95 border
                transition-all ${showVideo ? "bg-rose-700" : "bg-emerald-700"}`}
              ></button>
            </div>{" "}
          </div>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}

export { AboutPage };
