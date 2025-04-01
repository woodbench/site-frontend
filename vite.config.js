import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true, // Asegura que todas las rutas vuelvan al index.html
  },
  define: {
    global: 'window', // Necesario para librerías como Draft.js que esperan `global` como en Node
  },
});
