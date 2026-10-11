import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: { port: 5173, open: true },
  build: { chunkSizeWarningLimit: 1500 },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
} as never);
