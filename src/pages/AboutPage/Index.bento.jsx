import { DefaultLayout } from "../../layouts/DefaultLayout";

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
      <div
        className=" w-full h-full flex-grow flex  flex-col items-center 
        animate-fade-up animate-duration-200 animate-ease-out bg-black/10
        "
      >
        <h1 className="text-3xl lg:text-5xl  font-righteous">Sobre mí</h1>

        {/* <----card-----> */}
        <div
          className="font-poppins w-[90%] max-w-[1040px] mx-auto  p-5 rounded-xl
        md:shadow-2xl m-auto 
        "
        >
          <div className="md:grid md:grid-cols-10 grid-rows-2 gap-2 ">
            {/* Un cuadro */}
            <div className="col-span-6  rounded-lg md:shadow-2xl brightness-105">
              {showVideo ? (
                <video
                  height={400}
                  width={300}
                  autoPlay
                  className=" m-auto rounded-md md:shadow-2xl animate-jump"
                  ref={videoRef}
                  src={urlVideo}
                  controls
                  aria-label="Video que describe la personalidad de Luis Angel Jimenez"
                />
              ) : (
                <MyDescription />
              )}
            </div>
            {/* Otro cuadro */}
            <div className="col-span-4 p-2 rounded-lg md:shadow-2xl brightness-105">
              <p>
                Soy un apasionado del crecimiento personal y la búsqueda
                constante de la mejora, es algo que deseo para todos.
              </p>
              <p>
                Mi incursión en el mundo del desarrollo surgió de mi deseo de
                experimentar esa sensación de progreso continuo, impulsado por
                mi profundo interés en la tecnología, el razonamiento lógico, la
                creatividad y la resolución de problemas.
              </p>
            </div>
            {/* Primer cuadro de la segunda fila */}
            <div className="flex p-2  flex-col gap-1 relative col-span-4  rounded-lg md:shadow-2xl brightness-105">
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
                <p className="animate-fade-down">
                  Me gusta pasar tiempo con mis amigos, jugar al fulbol, la
                  calistenia, el café y hacerme cargo de las cosas que si puedo
                  controlar. 😉
                </p>
              )}

              <button
                aria-label="Muestra u oculta el video que describe la personalidad de Luis Angel Jimenez"
                onClick={toggleShowVideo}
                className={`w-10 h-5 rounded-3xl absolute  shadow-inner bottom-2 right-0 
                hover:brightness-110 hover:scale-95 border
                transition-all ${showVideo ? "bg-rose-700" : "bg-emerald-700"}`}
              ></button>
            </div>{" "}
            {/* Último cuadro */}
            <div className="col-span-6 hidden md:block  rounded-lg md:shadow-2xl brightness-105">
              <MyDescription initialIndex={3} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export { AboutPage };
