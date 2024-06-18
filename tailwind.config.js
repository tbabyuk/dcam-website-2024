
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "dcam-light-orange": "#D97047", // old palette
        "dcam-reg-orange": "#F98764", // new palette
        "dcam-dark-orange": "#F85F30", // new, 10% darker than regRed
        "dcam-light-blue": "#88BDE9", // new palette
        "dcam-reg-blue": "#567FA3", // new palette
        "dcam-dark-blue": "#375681", // new palette
        "dcam-reg-green": "#4AAD52", // old palette
        "dcam-dark-green": "#3D8F44",
        regYellow: "#F2F5CD", // new palette
        "dcam-white": "#F3F4F6",
        "dcam-black": "#4b5563"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["nord"],
  },
};
