/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import unoImg from "../../../assets/images/uno.jpg";

function Background({ className = "" }) {
  return (
    <div className={`flex flex-col items-center  ${className}`}>
      <p className="text-center dark:text-cyan-100 font-poppins">
        Dejo esta foto porque soy barbaro
      </p>
      <motion.img
        className="w-[200px]"
        src={unoImg}
        alt="Imagen de uno, de los chicos del barrio"
      />
    </div>
  );
}

export { Background };
