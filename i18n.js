import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Conexión con React
  .init({
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de respaldo si falta alguna clave
    ns: ['translation', 'textos'], // Namespaces para textos cortos y largos
    defaultNS: 'translation', // Namespace predeterminado
    backend: {
      // Función para cargar traducciones manualmente
      loadPath: '/locales/{{lng}}.{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React ya maneja la protección contra XSS
    },
  });

// Función para cargar JSON manualmente
export async function loadResources() {
  const namespaces = ['translation', 'textos'];
  const languages = ['es', 'en'];

  for (const lng of languages) {
    for (const ns of namespaces) {
      const response = await fetch(`/locales/${lng}.${ns}.json`);
      const translations = await response.json();
      i18n.addResourceBundle(lng, ns, translations);
    }
  }
  return Promise.resolve();
}

// loadResources();

export default i18n;
