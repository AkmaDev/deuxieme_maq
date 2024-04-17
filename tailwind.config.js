/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'fjalla': ['Fjalla One', 'sans-serif'],
      },
      colors: {
        'special_h': '#7A9A01',
        'special_link': '#999B30',
        'special_back': '#999933',
        'special': '#8fad00',
        'special_recycle': '#fbf4e8',
      }
    },
  },
  plugins: [],
};
