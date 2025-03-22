import React, { useState, useEffect } from 'react';
import { Providers } from './context/Providers';
import { AppRoutes } from './routes/AppRoutes';
import i18n, { loadResources } from '../i18n'; // Importamos i18n y loadResources

export const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadResources().then(() => {
      i18n.changeLanguage('es'); // Establece el idioma predeterminado
      setIsReady(true); // Marca que las traducciones están listas
    });
  }, []);

  if (!isReady) {
    return <p>Cargando traducciones...</p>; // Mensaje de carga
  }

  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};
