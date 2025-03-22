/**
 * Elimina el bloque Front Matter de un contenido Markdown.
 *
 * @param {string} markdown - Contenido en formato Markdown.
 * @returns {string} - Contenido Markdown sin Front Matter.
 */
export const removeFrontMatter = (markdown) => {
    return markdown.replace(/^---[\s\S]*?---\s*/, '');
};