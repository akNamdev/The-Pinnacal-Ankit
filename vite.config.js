// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// //   base: './', // Ensure this is set correctly
// // });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: './', // Adjust based on your setup
//   // build: {
//   //   outDir: 'dist', // Make sure Vercel recognizes this
//   // },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "dist",
//   },
//   server: {
//     port: 3000,
//   }
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

 

