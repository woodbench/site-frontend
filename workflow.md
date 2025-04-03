# 🧭 WoodBench Branch Workflow

Este documento explica cómo manejamos las ramas en el proyecto **WoodBench**.  
El objetivo es mantener un desarrollo organizado, controlado y fácil de revertir en caso de errores.

---

## 🌳 Estructura de ramas

```
tu-rama → dev → main → stable
                      ↑
                    (test)
```

| Rama      | Descripción |
|-----------|-------------|
| `dev`     | Rama principal de desarrollo. Todos los Pull Requests van acá.  
| `main`    | Rama de producción. Lo que está publicado online.  
| `stable`  | Última versión conocida como 100% estable y segura.  
| `test`    | (Opcional) Rama para pruebas antes de subir a `main`. Actualmente no se usa.

---

## 🔁 Flujo de trabajo

### 1. Crear tu rama desde `dev`

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-de-la-tarea
```

### 2. Subir tus cambios

```bash
git add .
git commit -m "feat: describe el cambio"
git push origin feature/nombre-de-la-tarea
```

### 3. Crear un Pull Request (PR)

- Base branch: `dev`
- Compare: la rama que creaste

---

## 🚀 Publicar en producción

Cuando el desarrollo está validado y listo:

```bash
# Desde la rama main
git checkout main
git pull origin main
git merge dev
git push origin main
```

Esto actualiza la producción (Vercel o el entorno que uses).

---

## ✅ Marcar como versión estable

Cuando confirmás que lo publicado en `main` funciona correctamente:

```bash
git checkout stable
git pull origin stable
git merge main
git push origin stable
```

`stable` guarda la última versión totalmente confiable.

---

## 🆘 ¿Y si algo falla en producción?

Podés revertir fácilmente usando la rama `stable`:

```bash
git checkout main
git pull origin main
git merge stable
git push origin main
```

Así restaurás la última versión buena sin necesidad de investigar errores urgentes.

---
