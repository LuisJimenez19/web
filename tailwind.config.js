/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {},
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(218, 23%, 16%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "light-cyan": "hsl(193, 38%, 86%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        html: "#aa480f",
        bootstrap: "#6366f1",
        js: "#eab308",
        npm: "#c80000",
        tailwind: "#38bdf8",
        css: "#4a5eac",
        react: "#149eca",
        nodejs: "#7bc62d",
        firebase: "#f58410",
        mysql: "#00758f",
        express: "#aeaeae",
        git: "#ff4500",
        mongodb: "#009988",
        php: "#fd00459f",
        laravel: "#fd0061",
        python: "#ffec00",
      },
      fontFamily: {
        poppins: "poppins",
        righteous: "righteous",
      },
    },
  },
  plugins: [],
};
