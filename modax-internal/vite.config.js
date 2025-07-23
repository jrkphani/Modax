/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@types': path.resolve(__dirname, './src/types'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@config': path.resolve(__dirname, './src/config'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.tsx',
        css: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'src/setupTests.ts',
                '**/*.d.ts',
                '**/*.config.js',
                '**/*.config.ts',
                'src/main.tsx',
                'src/vite-env.d.ts',
            ],
        },
    },
});
