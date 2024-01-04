import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      bebas: ["var(--bebas_neue)"],
    },
    animation: {
      "bounce-slow": "leftright 10s linear infinite",
      "bounce-top": "topbottom 10s linear infinite",
    },
    keyframes: {
      leftright: {
        "0%": { translateX: "translateX(0px)" },
        "10%": { transform: "translateX(10px)" },
        "20%": { transform: "translateX(15px)" },
        "30%": { transform: "translateX(20px)" },
        "40%": { transform: "translateX(10px)" },
        "50%": { transform: "translateX(0px)" },
        "60%": { transform: "translateX(-10px)" },
        "70%": { transform: "translateX(-15px)" },
        "80%": { transform: "translateX(-20px)" },
        "90%": { transform: "translateX(-10px)" },
        "100%": { transform: "translateX(0px)" },
      },
      topbottom: {
        "0%": { translateX: "translateY(0px)" },
        "10%": { transform: "translateY(10px)" },
        "20%": { transform: "translateY(15px)" },
        "30%": { transform: "translateY(20px)" },
        "40%": { transform: "translateY(10px)" },
        "50%": { transform: "translateY(0px)" },
        "60%": { transform: "translateY(-10px)" },
        "70%": { transform: "translateY(-15px)" },
        "80%": { transform: "translateY(-20px)" },
        "90%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0px)" },
      },
    },
  },
  plugins: [],
};
export default config
