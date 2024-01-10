import { socialIcons } from "../constants/socialIcons";

function ListSocialMedia() {
  const heigth = window.innerHeight;

  return (
    <ul
      /* initial={{
        translateY: "100%",
      }}
      animate={{
        translateY: 0,
        transitionDuration: ".2s",
        transitionDelay: ".2s",
      }} */

      className="absolute  bottom-0 right-2 lg:right-10 flex items-center flex-col gap-1 
      
      animate-fade-up animate-once animate-ease-in-out animate-duration-200
      
      "
    >
      {socialIcons.map((social) => {
        return (
          <li
            style={{ animationDelay: `${social.delay}ms` }}
            className={`${heigth > 600 ? "w-10 h-10" : "w-8 h-8 "} 
            animate-fade-up animate-once animate-ease-in-out animate-duration-200
           
            `}
            key={social.link}
          >
            <a
              aria-label={social["arial-label"]}
              href={social.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              {social.icon}
            </a>
          </li>
        );
      })}

      {/* LINEA */}
      <li
        className={`border flex-grow border-dark-blue dark:border-slate-200 w-[0.1em] mx-auto 
      ${heigth > 749 ? "h-20" : "h-0"}
      `}
      ></li>
    </ul>
  );
}

export { ListSocialMedia };
