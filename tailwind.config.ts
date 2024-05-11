import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily : {
        'roboto' : ['Roboto']
      },
      colors:{
        header : 'hsla(214, 15%, 32%, 1)',
        form : 'hsla(213, 18%, 22%, 1)'
      },
      boxShadow:{
        input : ' 0px 8px 4px 0px hsla(223, 35%, 8%, 0.08)',
        goBackButton : ' 0px 8px 4px 0px hsla(223, 35%, 8%, 0.08)'
      }
    },
  },
  plugins: [],
};
export default config;
