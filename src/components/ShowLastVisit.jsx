/* import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useRef } from "react";
import { db } from "../libs/firebase";
import { useState } from "react"; */
import { useContext, useEffect} from "react";
import { ContextProvider } from "@/context/ContextLastVisit";

function ShowLastVisit() {
 
  const { $last, $next, message, ready, setReady } = useContext(ContextProvider);
  useEffect(() => {
    if (ready === false) return;

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
    <div className="flex flex-col   overflow-hidden h-6 absolute  top-1 md:top-auto md:left-1 md:bottom-1  text-center md:text-left ">
      <small
        ref={$last}
        className=" text-xs md:text-sm font-poppins whitespace-nowrap"
      ></small>
      <small
        ref={$next}
        className=" text-xs md:text-sm font-poppins whitespace-nowrap"
      ></small>
    </div>
  );
}

export { ShowLastVisit };
