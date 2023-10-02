import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";

import "./default-layout.css";

/* eslint-disable react/prop-types */
function DefaultLayout({ children, className = "" }) {
  return (
    <>
      <ProgressBar />
      <div
        id="defaultLayout"
        className={`
      bg-light-cyan dark:bg-dark-blue
      w-full min-h-screen
      text-dark-grayish-blue dark:text-light-cyan
      bg-left dark:bg-center bg-cover bg-no-repeat
      flex flex-col 
      relative 
       `}
      >
        <Header />
        <main
          className={` flex flex-col flex-grow overflow-hidden ${className}`}
        >
          {children}
        </main>
      </div>
    </>
  );
}

export { DefaultLayout };
