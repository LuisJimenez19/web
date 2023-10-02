import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* PAGES */

import { ErrorPage } from "./pages/ErrorPage";
/* FRAMER MOTION */
import { AnimatePresence } from "framer-motion";
import { AboutPage } from "./pages/AboutPage/Index";
import { PortafolioPage } from "./pages/PortafolioPage/Index";
import { BtnToTop } from "./components/BtnToTop";
import { SkillsPage } from "./pages/SkillsPage";
import { HomePage } from "./pages/HomePage/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portafolio",
    element: <PortafolioPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div
      className="
    bg-light-cyan dark:bg-dark-blue 
    w-full min-h-screen overflow-hidden 
    text-dark-grayish-blue dark:text-light-cyan
    transition-all 
    "
    >
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
        <BtnToTop />
      </AnimatePresence>
    </div>
  );
}

export { App };
