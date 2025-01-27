// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

const PORT = (() => {
    if (typeof process.env.PORT === 'string') {
        const parsed = parseInt(process.env.PORT)
        if (isFinite(parsed)) return parsed
    }
    return 2020 // default port
})()

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        svelte(),
        {
            name: 'ensure-https',
            hooks: {
                'astro:config:setup': ({ config, updateConfig}) => {
                    if (!config.site?.startsWith('https:')) {
                        console.log(config.site?.replace(/^http:/, 'https:'))
                        updateConfig({
                            site: (config.site ?? 'https://ler.quest').replace(/^http:/, 'https:')
                        })
                    }
                }
            }
        }
    ],
    site: 'https://ler.quest',
    build: {
        assets: 'assets'
    },
    server: {
        port: PORT
    }
});