import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

export default {
  base: "Website-Visto",
  build: {
    outDir: "docs",
  },
  plugins: [vituum(), twig({ root: "./src" })],
};
