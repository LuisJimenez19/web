import { Link, useLocation } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";
import { BtnBackHome } from "./BtnBackHome";

function Header() {
  const { pathname } = useLocation();

  return (
    <header id="header" className="py-3  top-0 flex flex-col items-center">
      <div className="w-[90%]  mx-auto flex items-center justify-between ">
        <div className="logo">
          <p className="text-2xl lg:text-5xl font-bold drop-shadow-2xl">
            <Link aria-label="Enlace al home del portafolio" to={"/"}>
              JIMENEZ
            </Link>
          </p>
        </div>

        <div className="flex gap-3">
          {pathname !== "/" && <BtnBackHome />}
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}

export { Header };
