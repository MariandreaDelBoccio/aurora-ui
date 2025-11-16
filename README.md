# 🌟 Aurora UI

> Una librería de componentes React moderna, accesible y altamente themable.

[![npm version](https://img.shields.io/npm/v/@aurora/ui.svg)](https://www.npmjs.com/package/@aurora/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Características

- 🎨 **Themable**: Sistema de theming flexible con CSS variables
- ♿ **Accesible**: WCAG 2.1 AA compliant, navegación por teclado
- 🎯 **TypeScript**: Completamente tipado con TypeScript
- 🌙 **Dark Mode**: Soporte nativo para modo oscuro
- 📦 **Tree-shakeable**: Solo importa lo que necesitas
- 🚀 **Performance**: Optimizado con React 18
- 📱 **Responsive**: Mobile-first design

## 📦 Instalación

```bash
npm install @aurora/ui

# Peer dependencies
npm install react react-dom
```

## 🚀 Uso Rápido

```tsx
import { Button, Input } from '@aurora/ui';
import '@aurora/ui/styles.css';

function App() {
  return (
    <div>
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
      />
      <Button variant="primary" size="md">
        Enviar
      </Button>
    </div>
  );
}
```

## 🎨 Theming

Aurora UI usa CSS variables para theming. Puedes personalizar colores:

```css
:root {
  --aurora-primary-500: #your-color;
  --aurora-primary-600: #your-darker-color;
  /* ... más variables */
}
```

### Tailwind CSS

Si usas Tailwind, puedes integrar Aurora directamente:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@aurora/ui/**/*.{js,jsx,ts,tsx}',
  ],
  // ... resto de config
};
```

## 📚 Componentes Disponibles

### Button

```tsx
<Button 
  variant="primary" 
  size="md"
  loading={false}
  disabled={false}
>
  Click me
</Button>
```

**Variantes**: `primary`, `secondary`, `outline`, `ghost`, `danger`  
**Tamaños**: `sm`, `md`, `lg`

### Input

```tsx
<Input
  label="Username"
  placeholder="johndoe"
  error="Username is required"
  helperText="Min 3 characters"
  leftIcon={<UserIcon />}
/>
```

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con watch
npm run dev

# Build
npm run build

# Tests
npm run test

# Storybook
npm run storybook
```

## 📖 Storybook

Explora todos los componentes en Storybook:

```bash
npm run storybook
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Coverage
npm run test -- --coverage

# Watch mode
npm run test -- --watch
```

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Más componentes (Select, Modal, Tooltip, etc.)
- [ ] Animaciones con Framer Motion
- [ ] Modo de alto contraste
- [ ] Documentación interactiva
- [ ] CLI para generar componentes custom

## 📄 Licencia

MIT © [Tu Nombre]

## 🙏 Agradecimientos

Inspirado por excelentes librerías como Radix UI, Chakra UI y shadcn/ui.

---
