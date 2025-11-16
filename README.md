# 🌟 Aurora UI

> A modern, accessible, and highly themable React component library.

[![npm version](https://img.shields.io/npm/v/@aurora/ui.svg)](https://www.npmjs.com/package/@aurora/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Themable**: Flexible theming system using CSS variables  
- ♿ **Accessible**: WCAG 2.1 AA compliant, keyboard navigable  
- 🎯 **TypeScript**: Fully typed with TypeScript  
- 🌙 **Dark Mode**: Native support for dark mode  
- 📦 **Tree-shakeable**: Import only what you need  
- 🚀 **Performance**: Optimized for React 18  
- 📱 **Responsive**: Mobile-first design  

## 📦 Installation

```bash
npm install @aurora/ui

# Peer dependencies
npm install react react-dom
```

## 🚀 Quick Start
```bash
import { Button, Input } from '@aurora/ui';
import '@aurora/ui/styles.css';

function App() {
  return (
    <div>
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
      />
      <Button variant="primary" size="md">
        Submit
      </Button>
    </div>
  );
}
```

## 🎨 Theming
Aurora UI uses CSS variables for theming. You can customize colors like this:
```bash
:root {
  --aurora-primary-500: #your-color;
  --aurora-primary-600: #your-darker-color;
  /* ...more variables */
}
```

### Tailwind CSS
If you’re using Tailwind, you can integrate Aurora directly:
```bash
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@aurora/ui/**/*.{js,jsx,ts,tsx}',
  ],
  // ...rest of config
};
```

## 🛠️ Development
```bash
# Install dependencies
npm install

# Start development with watch mode
npm run dev

# Build
npm run build

# Run tests
npm run test

# Storybook
npm run storybook
```

## 📖 Storybook
Explore all components in Storybook:

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

## 🤝 Contributing
Contributions are welcome! Please:

1. Fork the repository

2. Create a feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

🙏 Acknowledgements
Inspired by amazing libraries like Radix UI, Chakra UI, and shadcn/ui.