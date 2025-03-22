import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './services/api'; // El servicio de RTK Query irá aquí.

export const store = configureStore({
  reducer: {
    // Añadimos el middleware de RTK Query
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Configura listeners para funcionalidades como refetch automático.
setupListeners(store.dispatch);
