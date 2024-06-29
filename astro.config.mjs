import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    site: process.env.SITE || 'http://localhost:2020',
    server: {
        port: 2020
    }
});