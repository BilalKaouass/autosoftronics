import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        autosoftronics: {
          primary: "#9632E1",
          secondary: "#2A91EF",
          accent: "#CB03DA",
          neutral: "#0B1220",
          "base-100": "#070A12",
          "base-200": "#0B1020",
          "base-300": "#0F1630",
          "base-content": "#E5E7EB",
          info: "#60A5FA",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
    ],
    darkTheme: "autosoftronics",
  },
};