/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customnavblack: "#1b1515",
        customContextblack: "#262626",
        customBlue: "#0c8ce9",
        customBackground: "#2f312f",
        customComments: "#2b2b2b",
        custmBgcomments: "#1e1e1e",
        customcommentsborder: "#505050"
      }
    },
  },
  
  plugins: [],
}

