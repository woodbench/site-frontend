/**
 * Formatea una fecha en función del idioma especificado.
 *
 * @param {string} date - Fecha en formato ISO (ej: "2024-01-10T10:00:00Z").
 * @param {string} language - Idioma para formatear ("es" o "en").
 * @returns {string} - Fecha formateada (ej: "10/01/2024").
 */
export const formatDate = (date, language) => {
    return new Date(date).toLocaleDateString(
        language === 'es' ? 'es-ES' : 'en-US',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }
    );
};
  