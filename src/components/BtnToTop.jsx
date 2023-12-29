/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ArrowTopIcon } from "../icons/Icons";

function BtnToTop({ className = "" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function showButton() {
      if (window.scrollY > window.innerHeight / 2) {
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

  return (
    <div
      className={`
      bg-light-cyan p-2  rounded-full w-10 h-10 flex items-center justify-center
      hover:bg-dark-grayish-blue shadow-2xl border border-dark-grayish-blue hover:border-light-cyan
      fixed bottom-10 right-2  xl:right-24
      group
      ${show ? "" : "translate-y-full opacity-0 pointer-events-none"}
      ${className}
      transition-all
      `}
    >
      <a
        aria-label="Vuelve al arriba de todo para mostrar la parte superior del documento"
        href="#"
      >
        <ArrowTopIcon
          className="stroke-dark-blue
        group-hover:stroke-light-cyan
        "
        />
      </a>
    </div>
  );
}

export { BtnToTop };
