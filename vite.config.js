import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

export default {
  base: "/",
  build: {
    outDir: "docs",
  },
  plugins: [vituum(), twig({ root: "./src" })],
  server: {
    host: "0.0.0.0",
    port: 5173
  }
};
