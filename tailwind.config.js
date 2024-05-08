/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cornflowerBlue: "#7C5DFA",
        heliotrope: "#9277FF",
        mirage: "#1E2139",
        ebonyClay: "#252945",
        selago: "#DFE3FA",
        baliHai: "#888EB0",
        shipCove: "#7E88C3",
        vulcan: "#0C0E16",
        burntSienna: "#EC5757",
        monaLisa: "#FF9797",
        whisper: "#F8F8FB",
        oxfordBlue: "#373B53",
        mirageDarker: "#141625",
        fiord: "#494E6E",
        pizazz: "#FF8F00",
        karry: "#FFEBD1",
        shamrock: "#33D69F",
        grannyApple: "#D0F5E9"
      },
      fontFamily: {
        spartan: ["spartan"]
      }
    },
  },
  plugins: [],
};
