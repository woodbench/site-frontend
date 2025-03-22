# Componente Tags

El componente `Tags` es una herramienta flexible y versátil para renderizar listas de etiquetas (tags) con múltiples opciones de configuración y personalización. Este documento detalla sus funcionalidades, configuraciones y ejemplos de uso.

---

## **Uso básico**
```jsx
import { Tags } from './Tags';

<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  title="Tags" 
/>
```

---

## **Props**

### **1. `tags`** (requerido)
- **Descripción:** Array de tags a renderizar.
- **Tipo:** `Array<string>`
- **Ejemplo:**
  ```jsx
  tags={['woodworking', 'anecdote', 'hammer blow']}
  ```

---

### **2. `title`** (opcional)
- **Descripción:** Título que se muestra encima de los tags.
- **Tipo:** `string`
- **Predeterminado:** `undefined` (no se muestra un título).
- **Ejemplo:**
  ```jsx
  title="Etiquetas"
  ```

---

### **3. `withPaper`** (opcional)
- **Descripción:** Controla si los tags están envueltos en un contenedor `Paper`.
- **Tipo:** `boolean`
- **Predeterminado:** `true`
- **Ejemplo:**
  ```jsx
  withPaper={false}
  ```

---

### **4. `containerSx`** (opcional)
- **Descripción:** Estilos personalizados para el contenedor de los tags.
- **Tipo:** `object` (propiedad `sx` de Material-UI).
- **Ejemplo:**
  ```jsx
  containerSx={{ justifyContent: 'center', gap: '16px' }}
  ```

---

### **5. `tagSx`** (opcional)
- **Descripción:** Estilos personalizados para los tags individuales.
- **Tipo:** `object` (propiedad `sx` de Material-UI).
- **Ejemplo:**
  ```jsx
  tagSx={{ backgroundColor: 'blue', color: 'white' }}
  ```

---

### **6. `variant`** (opcional)
- **Descripción:** Variante de diseño para los tags. Actualmente soporta:
  - `"default"`: Muestra los tags como texto.
  - `"chip"`: Usa el componente `Chip` de Material-UI.
- **Tipo:** `string`
- **Predeterminado:** `"default"`
- **Ejemplo:**
  ```jsx
  variant="chip"
  ```

---

### **7. `renderTag`** (opcional)
- **Descripción:** Función personalizada para renderizar cada tag.
- **Tipo:** `(tag: string) => JSX.Element`
- **Ejemplo:**
  ```jsx
  renderTag={(tag) => (
    <CustomTagComponent key={tag} label={tag} />
  )}
  ```

---

### **8. `maxTags`** (opcional)
- **Descripción:** Número máximo de tags visibles inicialmente. Los tags adicionales se pueden mostrar u ocultar con un botón.
- **Tipo:** `number`
- **Predeterminado:** `undefined` (muestra todos los tags).
- **Ejemplo:**
  ```jsx
  maxTags={3}
  ```

---

### **9. `onTagClick`** (opcional)
- **Descripción:** Función que se ejecuta al hacer clic en un tag. Útil para filtros dinámicos.
- **Tipo:** `(tag: string) => void`
- **Ejemplo:**
  ```jsx
  onTagClick={(tag) => console.log(`Tag clickeado: ${tag}`)}
  ```

---

## **Ejemplos**

### **1. Uso básico**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  title="Tags" 
/>
```

---

### **2. Sin título ni Paper**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  withPaper={false} 
/>
```

---

### **3. Variante con `Chip`**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  title="Etiquetas" 
  variant="chip" 
/>
```

---

### **4. Personalización de estilos**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  title="Tags Personalizados" 
  containerSx={{ justifyContent: 'center', gap: '16px' }} 
  tagSx={{ backgroundColor: 'green', color: 'white' }} 
/>
```

---

### **5. Límite de tags con botón de "ver más"**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow', 'mistakes', 'lessons']} 
  title="Tags Limitados" 
  maxTags={3} 
/>
```

---

### **6. Función personalizada `renderTag`**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  renderTag={(tag) => (
    <Button key={tag} variant="outlined" onClick={() => alert(tag)}>
      {tag}
    </Button>
  )} 
/>
```

---

### **7. Filtro dinámico**
```jsx
<Tags 
  tags={['woodworking', 'anecdote', 'hammer blow']} 
  dynamic 
  onTagClick={(tag) => console.log(`Filtrar por: ${tag}`)} 
/>
```

---

## **Notas adicionales**
1. **Accesibilidad:**
   - Los tags soportan `aria-label` y `role` para accesibilidad avanzada.
2. **Compatibilidad:**
   - Diseñado con Material-UI y React Router. Asegúrate de tener estas dependencias instaladas.
3. **Extensibilidad:**
   - Si necesitas más variantes, puedes extender la lógica dentro del componente o usar `renderTag` para personalización completa.

---

## **Contribución futura**
Si decides convertir este componente en un paquete NPM en el futuro:
1. Agrega más variantes predefinidas.
2. Escribe pruebas unitarias para asegurar la calidad.
3. Documenta ejemplos adicionales para casos de uso avanzados.

---
