// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'http://pattedoie.pernelle.eu',
    base: '/pattedoie/',
    vite: {
        server: {
            allowedHosts: ['http://pattedoie.pernelle.eu'],
        },
    },
});
