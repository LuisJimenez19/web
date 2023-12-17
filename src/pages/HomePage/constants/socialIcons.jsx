import {
  FrontendMentorIcon,
  GithubIcon,
  GmailIcon,
  LikedinIcon,
} from "../../../icons/Icons";

export const socialIcons = [
  {
    icon: (
      <FrontendMentorIcon
        className="
      w-full h-full rounded-full
      p-1 
      cursor-pointer
      border-gray-500
     border
     stroke-gray-500
       dark:hover:border-[#fff]
      hover:border-black shadow-lg
      hover:bg-[#fff]
       transition-all"
      />
    ),
    link: "https://www.frontendmentor.io/profile/LuisJimenez19",
    delay: 0.7,
  },
  {
    icon: (
      <GithubIcon
        className="
        w-full h-full rounded-full
  p-1 
  cursor-pointer
  border-gray-500
  stroke-gray-500 hover:stroke-black border
  dark:hover:stroke-light-cyan dark:hover:border-lime-200
  hover:border-black shadow-lg
  
  transition-all"
      />
    ),
    link: "https://github.com/LuisJimenez19",
    delay: 0.5,
  },
  {
    icon: (
      <GmailIcon
        className="
        w-full h-full rounded-full
      p-1 
      cursor-pointer
  border-gray-500
  stroke-gray-500  border
  hover:stroke-rose-600 hover:border-green-600
  hover:bg-white
  shadow-lg
  
  transition-all"
      />
    ),
    link: "mailto:luisjian948@gmail.com",
    delay: 0.4,
  },
  {
    icon: (
      <LikedinIcon
        className="
        w-full h-full rounded-full
      p-1 
      cursor-pointer
      border-gray-500
      stroke-gray-500 hover:stroke-[#fff] border
       dark:hover:border-[#fff]
      hover:border-black shadow-lg
      hover:bg-[#0a66c2]
       transition-all"
      />
    ),
    link: "https://www.linkedin.com/in/luis-jim%C3%A9nez-90a859250/",
    delay: 0.3,
  },
];
