/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Inter': ['Inter','sans-serif'],
      'lemon': ['Lemon','cursive'],
      'Dancing-script': ['Dancing Script','cursive'],
      'Bellota': ['Bellota','cursive'],
      'ADLaM': ['ADLaM Display','cursive'],
      'Quicksand': ['Quicksand','sans-serif'],
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
  
}

