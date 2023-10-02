/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { HomeIcon } from "../icons/Icons";
import { useNavigate } from "react-router-dom";
function BtnBackHome({ className = "" }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      onClick={handleClick}
      className={`p-2 rounded-full bg-light-cyan w-10 flex h-10 items-center justify-center
      hover:bg-dark-grayish-blue 
      backdrop-filter shadow-lg  group transition-all ${className}`}
    >
      <HomeIcon
        className="stroke-dark-blue
        group-hover:stroke-light-cyan
        "
      />
    </motion.button>
  );
}

export { BtnBackHome };
