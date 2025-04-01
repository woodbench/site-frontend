import React from 'react';
import { Providers } from './context/Providers';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};
