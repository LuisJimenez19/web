import {
  CloseIcon,
  GmailIcon,
  LikedinIcon,
  WppIcon,
} from "../../../icons/Icons";
import avatarCallMe from "../../../assets/images/avatar-luis-wpp/call-me.webp";
/* eslint-disable react/prop-types */
function SectionContact({ setOpenSection, openSection }) {
  return (
    <footer
      id="footerHomePage"
      className={`transition-all shadow-black shadow-[0_-1px_10px] z-50 absolute  bottom-0 w-full bg-light-cyan dark:bg-dark-blue 
      ${openSection ? "h-[50vh] " : "h-0 overflow-hidden"}`}
    >
      <button
        className=" block ml-auto mr-5 mt-3 active:scale-90 hover:scale-105 transition-all"
        onClick={() => {
          setOpenSection(false);
        }}
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-10  h-full w-full">
        {/* CONTACTOS */}
        <div className="font-poppins w-full max-w-[350px] hover:-translate-y-2 md:hover:translate-x-2 peer transition">
          <ul
            className="border w-[90%] mx-auto flex flex-wrap justify-center items-center gap-5 md:gap-1   md:flex-col dark:border-sky-800
          text-sm md:text-base p-1 md:p-5 shadow-2xl rounded-xl  transition"
          >
            <li>
              <a
                className="flex flex-col md:flex-row justify-center items-center md:gap-2 hover:text-rose-900 dark:hover:text-rose-300 group transition"
                href="mailto:luisjian948@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GmailIcon className="w-5 md:w-10 stroke-slate-800 dark:stroke-slate-100 group-hover:stroke-rose-600 transition" />{" "}
                <p> Luisjian948@gmail.com</p>
              </a>
            </li>
            <li>
              <a
                className="flex flex-col md:flex-row justify-center    items-center md:gap-2 hover:text-wpp  group transition"
                href="https://api.whatsapp.com/send?phone=542634807932"
                target="_blank"
                rel="noreferrer"
              >
                <WppIcon className="w-5 md:w-10 stroke-slate-800 dark:stroke-slate-100 group-hover:stroke-wpp" />
                <p>+54 2634 80 79 32</p>
              </a>
            </li>
            <li>
              <a
                className="flex flex-col md:flex-row justify-center    items-center md:gap-2 hover:text-linkedin  group transition"
                href="https://www.linkedin.com/in/luis-jim%C3%A9nez-90a859250/"
                target="_blank"
                rel="noreferrer"
              >
                <LikedinIcon className="w-5 md:w-10 stroke-slate-800 dark:stroke-slate-100 group-hover:stroke-linkedin" />
                <p>Luis Jimenez</p>
              </a>
            </li>
          </ul>
        </div>

        <img
          src={avatarCallMe}
          className="h-[50%] -translate-y-6 md:translate-y-0 md:h-[80%]  drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0_25px_25px_#000] transition peer-hover:drop-shadow-[0_25px_25px_#000] peer-hover:scale-105"
          alt="avatar de Luis Ángel, llamame"
        />
      </div>
    </footer>
  );
}

export { SectionContact };
