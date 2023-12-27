/* eslint-disable react/prop-types */

import { HomeIcon } from "../icons/Icons";
import { useNavigate } from "react-router-dom";
function BtnBackHome({ className = "" }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-light-cyan w-10 flex h-10 items-center justify-center
      hover:bg-dark-grayish-blue animate-jump-in animate-duration-150
      backdrop-filter shadow-lg  group transition-all ${className}`}
    >
      <HomeIcon
        className="stroke-dark-blue
        group-hover:stroke-light-cyan
        "
      />
    </button>
  );
}

export { BtnBackHome };
