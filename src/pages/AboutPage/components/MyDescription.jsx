import { useState } from "react";
import { avatars } from "../utils/images";

import { calculateAge } from "../../../helpers/calculateAge";

function MyDescription({ initialIndex = 0 }) {
  const [indexCurrentImage, setIndexCurrentImage] = useState(initialIndex);
  const last = avatars.length - 1;

  function changeImage() {
    setTimeout(() => {
      setIndexCurrentImage((prev) => {
        return prev === last ? 0 : prev + 1;
      });
    }, 3000);
  }

  /*  useEffect(() => {
    const interval = setInterval(() => {
      setIndexCurrentImage((prev) => {
        return prev === last ? 0 : prev + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [last]); */

  return (
    <div className="flex flex-col gap-3 min-h-[300px]  justify-center items-center mx-auto ">
      <img
        loading="lazy"
        onLoad={() => changeImage()}
        alt="Avatar de Luis Ángel Jimenez, el dueño de la web"
        className="min-w-[300px]  min-h-[300px] h-full object-cover inline-block w-[300px] animate-fade-up animate-fill-both"
        src={avatars[indexCurrentImage]}
      />
      {initialIndex === 0 && (
        <code className="text-sm inline-block whitespace-nowrap">
          Luis Jimenez, {calculateAge("13/01/2000")} años, Mendoza Argentina{" "}
        </code>
      )}
    </div>
  );
}

export { MyDescription };
