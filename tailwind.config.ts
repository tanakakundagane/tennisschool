import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray:'#d3d3d3',
        gray:'#778899',
        darkGray: '#464d53',
        darkdarkGray: '#363d42',
        pink: '#fa8072',
      },
    },
  },
  plugins: [],
};
export default config;
