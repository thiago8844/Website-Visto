import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

export default {
  build: {
    outDir: "docs", // Change output directory to 'docs'
  },
  plugins: [vituum(), twig({ root: "./src" })],
};
