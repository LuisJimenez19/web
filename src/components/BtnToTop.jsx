/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ArrowTopIcon } from "../icons/Icons";
import { motion } from "framer-motion";
function BtnToTop({ className = "" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function showButton() {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  const heigth = window.innerHeight;

  if (!show) return;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className={`
      bg-light-cyan p-2  rounded-full w-10 h-10 flex items-center justify-center
      hover:bg-dark-grayish-blue shadow-2xl border border-dark-grayish-blue hover:border-light-cyan
      fixed bottom-2 right-2
      group ${className}
      `}
    >
      <a href="#">
        <ArrowTopIcon
          className="stroke-dark-blue
        group-hover:stroke-light-cyan
        "
        />
      </a>
    </motion.div>
  );
}

export { BtnToTop };
