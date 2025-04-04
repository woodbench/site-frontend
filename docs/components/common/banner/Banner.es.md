# 📸 `Banner` – Componente de encabezado principal

🔗 [English version](./Banner.en.md)

Este componente muestra un banner visual en la página principal, compuesto por una imagen de fondo, una superposición (`BannerOverlay`) y contenido central (`BannerContent`). Es el primer punto visual que ve el visitante.

---

## ✨ Características

- Imagen de fondo a pantalla completa.
- Superposición para oscurecer el fondo (componente separado).
- Contenido con título, subtítulo, inspiración y botón (componente separado).
- Soporte para internacionalización (i18next).

---

## 🧩 Uso

```jsx
import { Banner } from './Banner';

<Banner />;
```

Este componente no recibe props. Todo el contenido se extrae desde archivos de traducción usando `useTranslation()`.

---

## 🧠 Dependencias

- [`@mui/material`](https://mui.com/)
- [`react-i18next`](https://react.i18next.com/)
- Imagen: `bannerTopHome.webp`

---

## 🧱 Componentes relacionados

- [`BannerOverlay`](./BannerOverlay.jsx): agrega una capa visual encima de la imagen.
- [`BannerContent`](./BannerContent.jsx): contiene el texto, botón y estructura visual del contenido.

---

## 🌐 Traducciones necesarias (en archivos JSON)

```json
"banner": {
  "alt": "Texto alternativo para la imagen del banner",
  "title": "Título del banner",
  "subtitle": "Subtítulo del banner",
  "inspiration": "Texto motivacional o inspiracional",
  "button": "Texto del botón"
}
```

---

## 📁 Ubicación

```
src/components/pages/home/Banner.jsx
```

---

## 🏷️ Tags

`component`, `home`, `banner`, `mui`, `i18n`, `visual`, `hero section`
