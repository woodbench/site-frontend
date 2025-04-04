# 📸 `Banner` – Main Header Component

🔗 [Versión en español](./Banner.es.md)

This component displays a visual banner on the homepage, composed of a background image, an overlay (`BannerOverlay`), and central content (`BannerContent`). It’s the first visual element a visitor sees.

---

## ✨ Features

- Full-width background image.
- Overlay to darken the background (separate component).
- Content area with title, subtitle, inspiration text, and a button (separate component).
- Internationalization support via `i18next`.

---

## 🧩 Usage

```jsx
import { Banner } from './Banner';

<Banner />;
```

This component does not receive props. All content is extracted from translation files using `useTranslation()`.

---

## 🧠 Dependencies

- [`@mui/material`](https://mui.com/)
- [`react-i18next`](https://react.i18next.com/)
- Image: `bannerTopHome.webp`

---

## 🧱 Related Components

- [`BannerOverlay`](./BannerOverlay.jsx): adds a visual layer over the image.
- [`BannerContent`](./BannerContent.jsx): contains the text, button, and layout of the banner’s main content.

---

## 🌐 Required Translations (JSON keys)

```json
"banner": {
  "alt": "Alternative text for the banner image",
  "title": "Banner title",
  "subtitle": "Banner subtitle",
  "inspiration": "Motivational or inspirational text",
  "button": "Button text"
}
```

---

## 📁 File Location

```
src/components/pages/home/Banner.jsx
```

---

## 🏷️ Tags

`component`, `home`, `banner`, `mui`, `i18n`, `visual`, `hero section`
