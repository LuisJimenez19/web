import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* PAGES */

import { NotFound } from "./pages/NotFound";
/* FRAMER MOTION */

import { AboutPage } from "./pages/AboutPage/Index";
import { PortafolioPage } from "./pages/PortafolioPage/Index";
import { BtnToTop } from "./components/BtnToTop";
import { SkillsPage } from "./pages/SkillsPage";
import { HomePage } from "./pages/HomePage/Index";
import { ErrorPage } from "./pages/ErrorPage";
import { useEffect } from "react";
import { URL_GEOLOCATION } from "./config";
import { ContextLastVisit } from "./context/ContextLastVisit";
import { saveGeolocation } from "./libs/saveDataLastVisit";
// import { ShowLastVisit } from "./components/ShowLastVisit";

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
/*   function saveGeolocation({ city, country, flag }) {
    addDoc(collection(db, "visits"), {
      city,
      country,
      flag,
      timestamp: Date.now(),
    })
      .then((res) => {
        console.log(`Take for curious : ${res.id}`);
      })
      .catch((e) => e);
  } */

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
  }, []);

  return (
    <ContextLastVisit>
      {/* <ShowLastVisit /> */}
      <RouterProvider router={router} />
      <BtnToTop />
    </ContextLastVisit>
  );
}

export { App };
