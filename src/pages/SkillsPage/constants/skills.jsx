import {
  AstroIcon,
  BootstrapIcon,
  CssIcon,
  ExpressIcon,
  FeelIcon,
  FirebaseIcon,
  HtmlIcon,
  JsIcon,
  MongoDBIcon,
  MySqlIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  UsersIcon,
  WorkIcon,
} from "../../../icons/Icons";

/* Habilidades */
export const skillsBackend = [
  {
    icon: <NodeIcon />,
    name: "nodejs",
    color: "nodejs",
    progress: 70,
  },
  {
    icon: <MySqlIcon />,
    name: "MySql",
    color: "mysql",
    progress: 60,
  },
  {
    icon: <FirebaseIcon />,
    name: "Firebase",
    color: "firebase",
    progress: 80,
  },
  {
    icon: <MongoDBIcon />,
    name: "MongoDb",
    color: "mongodb",
    progress: 70,
  },
  {
    icon: <AstroIcon />,
    name: "Astro",
    color: "astro",
    progress: 65,
  },
  {
    icon: <ExpressIcon />,
    name: "Express",
    color: "express",
    progress: 65,
  },
  /*  {
    icon: <PythonIcon />,
    name: "Python",
    color: "python",
    progress: 70,
  },
  {
    icon: <LaravelIcon />,
    name: "Laravel",
    color: "laravel",
    progress: 70,
  },
  {
    icon: <PhpIcon />,
    name: "Php",
    color: "php",
    progress: 70,
  },
  {
    icon: <GitIcon />,
    name: "Git",
    color: "gti",
    progress: 70,
  },*/
];
export const skillsFrontend = [
  {
    icon: <HtmlIcon />,
    name: "Html",
    color: "html",
    progress: 90,
  },
  {
    icon: <CssIcon />,
    name: "css",
    color: "css",
    progress: 90,
  },
  {
    icon: <JsIcon />,
    name: "javaScript",
    color: "js",
    progress: 90,
  },
  {
    icon: <BootstrapIcon />,
    name: "Bootstrap",
    color: "bootstrap",
    progress: 70,
  },
  {
    icon: <TailwindIcon />,
    name: "TailwindCss",
    color: "tailwind",
    progress: 80,
  },
  {
    icon: <ReactIcon />,
    name: "Reactjs",
    color: "react",
    progress: 90,
  },
  /*   {
    icon: <VueIcon />,
    name: "Vue",
    color: "vue",
    progress: 70,
  }, */
];

/* Cualidades */
export const socialQualities = [
  {
    icon: <UsersIcon />,
    name: "Tolerante",
  },
  {
    icon: <UsersIcon />,
    name: "Respetuoso",
  },
  {
    icon: <UsersIcon />,
    name: "Trabajo en equipo",
  },
  {
    icon: <UsersIcon />,
    name: "Empático",
  },
];

export const workQualities = [
  {
    icon: <WorkIcon />,
    name: "Responsable",
  },
  {
    icon: <WorkIcon />,
    name: "Puntual",
  },
  {
    icon: <WorkIcon />,
    name: "Proactivo",
  },
  {
    icon: <WorkIcon />,
    name: "Colaborador",
  },
];

export const personalQualities = [
  {
    icon: <FeelIcon />,
    name: "Ordenado",
  },

  {
    icon: <FeelIcon />,
    name: "Métodico",
  },

  {
    icon: <FeelIcon />,
    name: "Paciente",
  },

  {
    icon: <FeelIcon />,
    name: "Audaz",
  },
];

/* Array con las clases para darle los colores a las cualidades */

export const classColor = skillsBackend
  .map((skill) => skill.color)
  .concat(skillsFrontend.map((skill) => skill.color));

/* Es un jsx ya que en los arrays hay componentes */
