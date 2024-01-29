import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { createContext, useEffect, useRef, useState } from "react";
import { db } from "@/libs/firebase";

export const ContextProvider = createContext();

function ContextLastVisit({ children }) {
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(true);
  const $last = useRef();
  const $next = useRef();

  /* Creo este contexto para traer la consulta y que solo se ejecute este efecto la primera vez. */
  useEffect(() => {
    const unSub = onSnapshot(
      query(collection(db, "visits"), orderBy("timestamp", "desc"), limit(3)),
      (snap) => {
        const data = snap.docs;
        const lastVisit = data[0]?.data();
        const penultimateVisit = data[1]?.data();

        if (lastVisit && penultimateVisit) {
          const isLastEmpty = $last.current?.innerHTML === ""; // solo cuando es la primera vez, muestra la ubicación anterior

          if (isLastEmpty && penultimateVisit.city !== lastVisit.city) {
            $last.current.innerHTML = `Última visita desde ${penultimateVisit.city}, ${penultimateVisit.country} ${penultimateVisit.flag}`;
          }
        }
        setMessage(
          `Última visita desde ${lastVisit.city}, ${lastVisit.country} ${lastVisit.flag}`
        );
      },
      (error) => error
    );

    return () => unSub();
  }, []);

  return (
    <ContextProvider.Provider
      value={{ $last, $next, message, ready, setReady }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export { ContextLastVisit };
