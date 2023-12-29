import { Link, useLocation } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";
import { BtnBackHome } from "./BtnBackHome";

function Header() {
  const { pathname } = useLocation();

  return (
    <header id="header" className="py-3  top-0 flex flex-col items-center">
      <div className="w-[90%]  mx-auto flex items-center justify-between ">
        <div className="logo">
          <p
            className={`text-2xl lg:text-5xl font-bold drop-shadow-2xl transition-all
            bg-clip-text text-transparent
            bg-gradient-to-l from-slate-900 via-purple-900 to-purple-900
          dark:bg-gradient-to-l dark:from-gray-600 dark:to-gray-100 
        
          `}
          >
            <Link
              aria-label="Enlace que redirige a la página princilap del portafolio de Luis Ángel Jimenez"
              to={"/"}
            >
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
