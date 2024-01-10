import { useState } from "react";
import { ChangeIcon } from "@/icons/Icons";
import { SkeletonImage } from "./SkeletonImage";

function MockupProject({ project }) {
  const [loadingImage, setLoadingImage] = useState(true);

  const { images } = project;

  const imagesDesktop = images.filter((img) => img.includes("desktop"));
  const imagesMobile = images.filter((img) => img.includes("mobile"));

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
    <>
      {/* No se vea el hueco mientras no hay imagen */}
      {loadingImage && <SkeletonImage />}

      <figure
        className={`flex-col  items-center  flex-1 fade-in ${
          loadingImage ? "opacity-0 absolute" : "relative flex"
        } `}
      >
        {/* Hacer que cambie la imagen dependiendo de cuantas tenga */}
        <img
          onLoad={() => {
            setLoadingImage(false);
          }}
          loading="lazy"
          className="select-none
          hover:scale-105 hover:drop-shadow-2xl 
          transition-all "
          src={currentImageDesktop}
          alt={`Imagen del proyecto ${project.name} en desktop`}
        />
        <ChangeIcon
          onClick={() => {
            changeImage();
          }}
          className={`${loadingImage ? "hidden relative" : "absolute"} 
          top-0 md:top-10 lg:top-16 right-0
          bg-light-cyan
         stroke-dark-grayish-blue border p-1 rounded-full border-dark-grayish-blue cursor-pointer hover:bg-dark-grayish-blue hover:stroke-light-cyan hover:border-light-cyan hover:scale-110 
         active:brightness-110 active:scale-90
         transition-all`}
        />
        {/* Mobile image */}
        <img
          loading="lazy"
          className="
          select-none
          absolute w-[100px] md:w-[90px] lg:w-[120px] bottom-[-50px] xl:w-[140px] xl:bottom-[-50px]  right-0
          hover:scale-105 hover:drop-shadow-2xl 
          transition-all 
          "
          src={currentImageMobile}
          alt={`Imagen del proyecto ${project.name} en mobile`}
        />
      </figure>
    </>
  );
}

export { MockupProject };
