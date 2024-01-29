import { Suspense } from "react";
import { Header } from "@/components/Header";

import "./default-layout.css";

/* eslint-disable react/prop-types */
function DefaultLayout({ children, className = "" }) {
  return (
    <div
      id="defaultLayout"
      className={`
      bg-light-cyan dark:bg-dark-blue
      w-full min-h-screen
      text-dark-grayish-blue dark:text-light-cyan
      bg-left dark:bg-center bg-cover bg-no-repeat
      flex flex-col 
      relative overflow-hidden
       `}
    >
      <Suspense fallback>
        <Header />

        <main className={` flex flex-col flex-grow  ${className}`}>
          {children}
        </main>
      </Suspense>
    </div>
  );
}

export { DefaultLayout };
