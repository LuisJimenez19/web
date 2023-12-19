import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* PAGES */

import { NotFound } from "./pages/NotFound";
/* FRAMER MOTION */
import { AnimatePresence } from "framer-motion";
import { AboutPage } from "./pages/AboutPage/Index";
import { PortafolioPage } from "./pages/PortafolioPage/Index";
import { BtnToTop } from "./components/BtnToTop";
import { SkillsPage } from "./pages/SkillsPage";
import { HomePage } from "./pages/HomePage/Index";
import { ErrorPage } from "./pages/ErrorPage";
import { useEffect } from "react";
import { db } from "./libs/firebase";
import { addDoc, collection } from "firebase/firestore";
import { URL_GEOLOCATION } from "./config";

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
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  // esta es la respuesta.
  /* "city": {   
    "name": "Rivadavia",
    "postalCode": "5577",
    "metroCode": null,
    "alpha2": null,
    "alpha3": null,
    "numeric": null
  },
  "country": {
    "name": "Argentina",
    "flag": "🇦🇷" */

  /* Guardo la información en la base de datos */
  function saveGeolocation({ city, country, flag }) {
    addDoc(collection(db, "visits"), {
      city,
      country,
      flag,
      timestamp: Date.now(),
    })
      .then((res) => {
        console.log(`Toma por curioso: ${res.id}`);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    /* Obtengo los datos del usuario que visita la página */
    fetch(URL_GEOLOCATION)
      .then((res) => res.json())
      .then((data) => {
        const {
          city: { name: city },
          country: { name: country, flag },
        } = data;
        /* Lo guardo en la db */
        saveGeolocation({ city, country, flag });
      });
  });

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
