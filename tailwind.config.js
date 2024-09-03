/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  // content: ["/*.{html,js}"],
  theme: {
   
    extend: {
      colors:{
        "fontColor":"#656865",
        'custom-gray': '#f5f5f5',
        "primary":"#00699E",
        "smaillColor":"#A3ABA3",
        "bg1":"#333333"
        
      },
    },
  },
  plugins: [],
};
