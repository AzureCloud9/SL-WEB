import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx', // Correct the path if it's app.tsx instead of app.ts
                'resources/css/app.css',
                'resources/js/Pages/Home.tsx'
            ],
            refresh: true,
        }),
        react(),
    ],
    // server: {
    //     https: true,
    //     hmr: {
    //         host: 'secure-thicket-74556-1cb1c0b6b14c.herokuapp.com',
    //         protocol: 'wss',
    //     },
    // },
});
