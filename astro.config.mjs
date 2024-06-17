import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";




// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), alpinejs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  
  
});