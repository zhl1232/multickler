import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/gadget-notebook/",
  plugins: [vue()]
});
