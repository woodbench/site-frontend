# 🤝 Contribuir a WoodBench | Contributing to WoodBench

WoodBench es un blog de carpintería hecho con React y Vite, pensado para inspirar, enseñar y compartir experiencias reales con la madera.

Gracias por tu interés en colaborar con **WoodBench**.
Toda sugerencia, mejora, corrección o idea es más que bienvenida.

WoodBench is a woodworking blog built with React and Vite, designed to inspire, teach, and share real-life experiences with wood.

Thanks for your interest in contributing to **WoodBench**!
Suggestions, improvements, corrections, and new ideas are all welcome.

---

## 🛠️ Tecnologías utilizadas | Tech Stack

- React
- Vite
- Material UI (MUI)
- React Router
- i18next
- React Markdown
- Vercel

---

## 🧑‍💻 Configuración local | Local Setup

```bash
git clone https://github.com/woodbench/woodbench-frontend.git
cd woodbench-frontend
npm install
npm run dev
```

---

## 🛠️ ¿Cómo contribuir? | How to contribute

### 🧪 1. Explorá el proyecto | Explore the project

Antes de enviar una propuesta, revisá el sitio [thewoodbench.com](https://thewoodbench.com)  
o explorá el código en este repositorio.  
Te puede ayudar a entender el enfoque, estilo y tono del blog.

Before submitting a proposal, check out the website or explore the code.  
It helps you understand the tone, structure, and approach.

---

### 🐛 2. Issues

Si encontrás un error o querés sugerir una mejora, podés:

- Abrir un nuevo issue
- Comentar en un issue ya existente
- Proponer un nuevo contenido o sección

If you find a bug or want to suggest an improvement:

- Open a new issue
- Comment on an existing one
- Propose a new topic or section

---

### 🌱 3. Branches | Ramas

#### 🌿 Convención de nombres | Naming convention

Usamos este esquema para nombrar ramas de desarrollo:

We use this naming scheme for development branches:

- `main` – Producción | Production branch
- `stable` – Ultima version estable | last stable version
- `test` – Pruebas opcionales | Optional testing
- `dev` – Desarrollo principal | Main development
- `release/x.y.z` – Preparación de versión estable | Release candidate
- `feature/nombre-de-feature` – Nueva funcionalidad | New feature
- `bugfix/nombre-del-bug` – Corrección de error | Bug fix
- `hotfix/urgencia` – Arreglo urgente en producción | Emergency fix
- `refactor/nombre-del-refactor` – Mejora interna sin cambiar funcionalidad | internal refactor
- `docs/nombre-documentacion` – Documentacion | Documentation

Ejemplos | Examples:

- `feature/formulario-descarga`
- `bugfix/imagen-no-carga`
- `hotfix/fix-footer`

---

### ✅ 4. Pull Requests

Una vez que tu rama esté lista:

1. Asegurate de probar los cambios.
2. Enviá el pull request desde tu rama hacia `dev`.
3. Agregá una descripción clara de lo que hiciste.

Make sure to test your changes, then open a PR to `dev` with a clear description.

---

## 🧾 Commits

- En lo posible, escribí mensajes cortos, descriptivos y en presente.  
  Prefer short, descriptive commit messages in the present tense.

```bash
✅ add download section
🐛 fix wrong i18n fallback
📝 update blog post styles
```

---

## 📤 Pull Requests

Por favor incluí:  
Please include:

- Qué cambiaste / What you changed
- Por qué lo cambiaste / Why you changed it
- Screenshots (si aplica) / Screenshots (if applicable)

---

## 📁 Estructura del proyecto | Project Structure

```
src/
├── components/      → Componentes reutilizables / Reusable components
├── pages/           → Páginas del sitio / Site pages
├── content/blog/    → Entradas en formato markdown / Blog posts in .md
├── routes/          → Rutas con React Router
├── theme/           → Configuración de MUI
└── i18n/            → Archivos de internacionalización
```

---

## 📌 Notas finales | Final Notes

Este proyecto está abierto a sugerencias, mejoras y nuevas ideas.  
This project is open to suggestions, improvements, and new ideas.

👉 Gracias por ayudar a que WoodBench crezca.  
👉 Thanks for helping WoodBench grow.
