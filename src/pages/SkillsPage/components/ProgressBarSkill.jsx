/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function ProgressBarSkill({ progress = 101, name = "", color = "blue-950" }) {
  const total = 100;

  return (
    <div className=" flex-grow mx-auto bg-gray-600 shadow-2xl rounded-lg overflow-hidden relative ">
      <p className="text-center relative z-10">
        {name} {`${progress !== 101 ? progress + "%" : ""}`}
      </p>
      <motion.span
        initial={{
          translateX: "-100%",
        }}
        animate={{
          translateX: `-${total - progress}%`,
        }}
        transition={{
          delay: 0.2,
        }}
        className={`absolute top-0 left-0 right-0 bottom-0  bg-${color}`}
      ></motion.span>
    </div>
  );
}

export { ProgressBarSkill };
