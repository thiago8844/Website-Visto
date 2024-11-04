import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

export default {
  base: "/",
  build: {
    outDir: "docs",
  },
  plugins: [vituum(), twig({ root: "./src" })],
};
