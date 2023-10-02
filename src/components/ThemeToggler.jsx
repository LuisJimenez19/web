import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../icons/Icons";
import { APP_NAME } from "../config";

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem(`dark-mode-${APP_NAME}`) || "dark";
  });

  function handleDarkMode() {
    setDarkMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem(`dark-mode-${APP_NAME}`, newMode);
      return newMode;
    });
  }

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className=" p-1 shadow-md shadow-dark-grayish-blue
      dark:shadow-sky-800
      rounded-lg hover:scale-110 hover:shadow-inner transition-all"
      onClick={handleDarkMode}
    >
      {darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
export { ThemeToggler };
