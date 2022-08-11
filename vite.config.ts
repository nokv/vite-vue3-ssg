import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

const outPath = path.resolve(__dirname, 'dist');

export default defineConfig({
    base: '/',
    resolve: {
        alias: {
            '~': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue(),
        Pages({
            dirs: 'src/pages',
        }),
    ],
    ssgOptions: {
        dirStyle: 'nested',
        script: 'async',
    },
    build: {
        cssCodeSplit: true,
        outDir: outPath,
        emptyOutDir: true,
        rollupOptions: {
            input: {},
            output: {
                assetFileNames: ({ name }) => {
                    let extType = name ? name.split('.')[1] : '';
                    if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    return `assets/${extType}/[name].[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name].[hash].js',
                entryFileNames: 'assets/js/[name].[hash].js',
            },
        },
    },
});
