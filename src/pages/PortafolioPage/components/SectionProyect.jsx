/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { ChangeIcon, ClipIcon, GithubIcon } from "../../../icons/Icons";
import { useState } from "react";
import { Badge } from "../../../components/Badge";
import { classForBadges } from "../utils/classForBadges";

/* La mitad de imagenes son de desktop y la otra de mobile
Las primeras son desktop, hacer que se cambien cada tanto.
*/

function SectionProyect({ proyect }) {
  const { images } = proyect;
  const imagesDesktop = images.filter((img) => img.includes("desktop.png"));
  const imagesMobile = images.filter((img) => img.includes("mobile.png"));

  const [currentImageDesktop, setCurrentImageDesktop] = useState(
    imagesDesktop[0]
  );
  const [currentImageMobile, setCurrentImageMobile] = useState(imagesMobile[0]);

  function changeIndexImage(images, currentImage) {
    const lastIndex = images.length - 1;
    const currentIndex = images.findIndex((img) => img === currentImage);
    return currentIndex === lastIndex ? 0 : currentIndex + 1;
  }

  function changeImage() {
    setCurrentImageMobile((current) => {
      return imagesMobile[changeIndexImage(imagesMobile, current)];
    });
    setCurrentImageDesktop((current) => {
      return imagesDesktop[changeIndexImage(imagesDesktop, current)];
    });
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      className="flex flex-col hover:backdrop-brightness-105 p-5  md:flex-row items-center justify-center   transition-all"
    >
      <div className="md:w-[70%] lg:w-[50%] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-righteous">
            {proyect.name}
          </h2>

          <h3 className="text-lg md:text-xl lg:text-2xl font-righteous">
            {proyect.subtitle}
          </h3>

          <p className="text-md lg:text-lg font-poppins ">
            {proyect.description}
          </p>
        </div>
        {/* BADGES */}
        <div
          className="flex flex-wrap  justify-center items-center md:justify-start
        gap-2"
        >
          {proyect.badges.map((badge, index) => {
            return (
              <Badge
                key={index}
                index={index}
                className={classForBadges[badge]}
                content={badge}
              />
            );
          })}
        </div>
        {/* Enlaces externos */}
        <div className="flex justify-center gap-5 items-center md:justify-start">
          <a
            className={`border w-12 h-12 flex items-center justify-center
            p-1 rounded-2xl bg-dark-grayish-blue hover:brightness-125 transition-all  ${
              !proyect.linkDemo
                ? "opacity-25 cursor-not-allowed"
                : "hover:scale-95"
            }`}
            target="_blank"
            href={proyect.linkDemo}
            rel="noreferrer"
          >
            <ClipIcon className="w-10" />
          </a>
          <a
            className={`border w-12 h-12 flex items-center justify-center
             p-1 rounded-2xl bg-dark-grayish-blue hover:brightness-125 transition-all  ${
               !proyect.linkGithub
                 ? "opacity-25 cursor-not-allowed"
                 : "hover:scale-95"
             }`}
            href={proyect.linkGithub}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon stroke="#fff" className="w-10" />
          </a>
        </div>
      </div>
      <div className="relative flex flex-col  items-center">
        {/* Hacer que cambie la imagen dependiendo de cuantas tenga */}
        <motion.img
          className="select-none
          hover:scale-105 hover:drop-shadow-2xl 
          transition-all"
          src={currentImageDesktop}
          alt={`Imagen del proyecto ${proyect.name} en desktop`}
        />
        <ChangeIcon
          onClick={() => {
            changeImage();
          }}
          className="absolute 
          top-0 md:top-10 lg:top-16 right-0
          bg-light-cyan
         stroke-dark-grayish-blue border p-1 rounded-full border-dark-grayish-blue cursor-pointer hover:bg-dark-grayish-blue hover:stroke-light-cyan hover:border-light-cyan hover:scale-110 
         active:brightness-110 active:scale-90
         transition-all"
        />
        <motion.img
          className="
          select-none
          absolute w-[100px] md:w-[120px] xl:w-[200px] bottom-[-50px] xl:bottom-[-100px]  right-0
          hover:scale-105 hover:drop-shadow-2xl 
          transition-all
          "
          src={currentImageMobile}
          alt={`Imagen del proyecto ${proyect.name} en mobile`}
        />
      </div>
    </motion.div>
  );
}

export { SectionProyect };

/* useEffect(() => {
    const intervalImagesDesktop = setTimeout(() => {
      setCurrentImageDesktop((current) => {
        return imagesDesktop[changeIndexImage(imagesDesktop, current)];
      });
    }, 3000);

    return () => {
      clearInterval(intervalImagesDesktop);
    };
  }, []);

  useEffect(() => {
    const intervalImagesMobile = setTimeout(() => {
      setCurrentImageMobile((current) => {
        return imagesMobile[changeIndexImage(imagesMobile, current)];
      });
    }, 3000);

    return () => {
      clearInterval(intervalImagesMobile);
    };
  }, []); */
