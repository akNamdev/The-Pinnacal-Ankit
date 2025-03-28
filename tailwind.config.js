// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'xs': '320px', 
//       },
      
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // tabitem: {
    //   base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-bold first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
    //   variant: {
    //     default: {
    //       base: "rounded-t-lg",
    //       active: {
    //         on: "bg-[#173f63] text-[red] dark:bg-gray-800 dark:text-cyan-500 border-2 border-red-900",
    //         off: "text-red-500 hover:bg-red-500 hover:text-green-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    //       }
    //     }
    //   }
    // },
    extend: {
      animation: {
        bounceSlow: "bounce 4s infinite",
      },
      
      screens: {
        'xs': '320px',
      },
    },

  },
  plugins: [],  
}
