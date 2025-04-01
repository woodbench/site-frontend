import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './services/api'; // El servicio de RTK Query irá aquí.

export const store = configureStore({
  reducer: {
    // Reducers de RTK Query
    [api.reducerPath]: api.reducer,

    // Otros slices propios (proximamente)
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Configura listeners para funcionalidades como refetch automático.
setupListeners(store.dispatch);
