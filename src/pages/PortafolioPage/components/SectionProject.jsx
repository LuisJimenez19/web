/* eslint-disable react/prop-types */

import { ClipIcon, GithubIcon } from "../../../icons/Icons";

import { Badge } from "../../../components/Badge";
import { classForBadges } from "../utils/classForBadges";

/* Css */
import "../css/index.css";

import { MockupProject } from "./MockupProject";

/* La mitad de imagenes son de desktop y la otra de mobile
Las primeras son desktop, hacer que se cambien cada tanto.
*/

function SectionProject({ project }) {
  return (
    <div className="flex flex-col hover:backdrop-brightness-105 hover:shadow p-5  md:flex-row items-center justify-center  transition-all card-project">
      <div className=" flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-righteous">
            {project.name}
          </h2>

          <h3 className="text-lg md:text-xl lg:text-2xl font-righteous">
            {project.subtitle}
          </h3>

          <p className="text-md lg:text-lg font-poppins ">
            {project.description}
          </p>
        </div>
        {/* BADGES */}
        <div
          className="flex flex-wrap  justify-center items-center md:justify-start
        gap-2"
        >
          {project.badges.map((badge, index) => {
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
              !project.linkDemo
                ? "opacity-25 cursor-not-allowed"
                : "hover:scale-95"
            }`}
            target="_blank"
            href={project.linkDemo}
            rel="noreferrer"
          >
            <ClipIcon className="w-10" />
          </a>
          <a
            className={`border w-12 h-12 flex items-center justify-center
             p-1 rounded-2xl bg-dark-grayish-blue hover:brightness-125 transition-all  ${
               !project.linkGithub
                 ? "opacity-25 cursor-not-allowed"
                 : "hover:scale-95"
             }`}
            href={project.linkGithub}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon stroke="#fff" className="w-10" />
          </a>
        </div>
      </div>

      <MockupProject project={project} />
    </div>
  );
}

export { SectionProject };

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
