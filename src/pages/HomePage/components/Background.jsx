/* eslint-disable react/prop-types */

import unoImg from "../../../assets/images/uno.webp";

function Background({ className = "" }) {
  return (
    <div className={`flex flex-col items-center   ${className}`}>
      <p className="text-center dark:text-cyan-100 text-sm md:text-base font-poppins">
        Dejo esta foto porque soy barbaro
      </p>
      <img
        className="w-[150px] "
        src={unoImg}
        alt="Imagen de uno, de los chicos del barrio"
      />
    </div>
  );
}

export { Background };
