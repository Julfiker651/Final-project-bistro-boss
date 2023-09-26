import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  mode: "development",
  resolve: {
      alias: {
          _: path.resolve(__dirname, "src"),
      },
  },
  plugins: [
      reactRefresh(),
  ],
  clearScreen: false,
  server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      hmr: {
          port: 443,
      },
  },
});