import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  // ✅ Copy CSS manually or use a plugin
  onSuccess: 'cp src/app/globals.css dist/globals.css',
});