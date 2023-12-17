import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useRef } from "react";
import { db } from "../libs/firebase";
import { useState } from "react";

function ShowLastVisit() {
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(true);

  const $last = useRef();
  const $next = useRef();

  useEffect(() => {
    const unSub = onSnapshot(
      query(collection(db, "visits"), orderBy("timestamp", "desc"), limit(3)),
      (snap) => {
        const data = snap.docs;
        const lastVisit = data[0].data();
        setMessage(
          `Última visita desde ${lastVisit.city}, ${lastVisit.country} ${lastVisit.flag}`
        );
      },
      (error) => console.log(error)
    );

    return () => unSub();
  }, []);

  useEffect(() => {
    if (ready === false) return;
    console.log(message);
    const isLastEmpty = $last.current.innerHTML === "";
    if (isLastEmpty) {
      $last.current.innerHTML = message;
      return;
    }

    $next.current.innerHTML = message;

    $next.current.style.animation = "fadeInUp 1s ease-in-out forwards";
    $last.current.style.animation = "fadeOutUp 1s ease-in-out forwards";

    setReady(false);

    $next.current.onanimationend = () => {
      $next.current.style.animation = "";
      $last.current.style.animation = "";

      $last.current.innerHTML = message;
      $next.current.innerHTML = "";
      setReady(true);
    };

    //eslint-disable-next-line
  }, [message]);

  return (
    <div className="flex flex-col   overflow-hidden h-6 absolute  top-1 md:top-auto md:left-1 md:bottom-1  text-center">
      <small ref={$last} className=" text-xs md:text-sm font-poppins"></small>
      <small ref={$next} className=" text-xs md:text-sm font-poppins"></small>
    </div>
  );
}

export { ShowLastVisit };
