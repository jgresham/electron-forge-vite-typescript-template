import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig((env) => {

  return {
    base: './',
    build: {
      outDir: ".vite/renderer/main_window",
    },
    plugins: [],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  } as UserConfig;
});
