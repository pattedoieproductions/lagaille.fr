// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://pattedoie.pernelle.eu',
    base: '/',
    vite: {
        server: {
            allowedHosts: ['https://pattedoie.pernelle.eu'],
        },
    },
});
