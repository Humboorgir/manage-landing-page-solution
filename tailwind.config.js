/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F3613C",
      },
      animation: {
        scroll: "scroll 40s forwards linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translate(0%)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
