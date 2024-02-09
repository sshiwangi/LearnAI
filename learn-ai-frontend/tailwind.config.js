import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "#090909",
          main: "#6F53FF",
          promptbg: "#1E1E20",
        },
      },
      boxShadow: {
        "card-shadow": "0px 8px 24px 0px rgba(0,0,0,0.42000000000000004)",
      },
    },
  },
  plugins: [],
};
