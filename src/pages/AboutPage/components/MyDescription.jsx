import { useState } from "react";
import { avatars } from "../utils/images";
import { motion } from "framer-motion";
import { calculateAge } from "../../../helpers/calculateAge";

function MyDescription() {
  const [indexCurrentImage, setIndexCurrentImage] = useState(0);
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
    <div className="flex flex-col gap-3 min-h-[300px]  justify-center items-center">
      <motion.img
        key={avatars[indexCurrentImage].toString()} // clave única para que Framer Motion pueda aplicar la animación al cambiar la imagen
        onLoad={() => changeImage()}
        initial={{
          opacity: 0,
          translateY: "10px",
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        exit={{
          opacity: 0,
          translateY: "-10px",
        }}
        transition={{
          duration: 0.5,
        }}
        alt="Avatar de Luis Ángel Jimenez, el dueño de la web"
        className="min-w-[300px]  min-h-[300px] h-full object-cover inline-block w-[300px]"
        src={avatars[indexCurrentImage]}
      />
      <code className="text-sm inline-block whitespace-nowrap">
        Luis Jimenez, {calculateAge("13/01/2000")} años, Mendoza Argentina{" "}
      </code>
    </div>
  );
}

export { MyDescription };
