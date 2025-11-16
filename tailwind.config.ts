/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--aurora-primary-50, #eff6ff)",
          100: "var(--aurora-primary-100, #dbeafe)",
          200: "var(--aurora-primary-200, #bfdbfe)",
          300: "var(--aurora-primary-300, #93c5fd)",
          400: "var(--aurora-primary-400, #60a5fa)",
          500: "var(--aurora-primary-500, #3b82f6)",
          600: "var(--aurora-primary-600, #2563eb)",
          700: "var(--aurora-primary-700, #1d4ed8)",
          800: "var(--aurora-primary-800, #1e40af)",
          900: "var(--aurora-primary-900, #1e3a8a)",
          950: "var(--aurora-primary-950, #172554)",
        },
        neutral: {
          50: "var(--aurora-neutral-50, #fafafa)",
          100: "var(--aurora-neutral-100, #f5f5f5)",
          200: "var(--aurora-neutral-200, #e5e5e5)",
          300: "var(--aurora-neutral-300, #d4d4d4)",
          400: "var(--aurora-neutral-400, #a3a3a3)",
          500: "var(--aurora-neutral-500, #737373)",
          600: "var(--aurora-neutral-600, #525252)",
          700: "var(--aurora-neutral-700, #404040)",
          800: "var(--aurora-neutral-800, #262626)",
          900: "var(--aurora-neutral-900, #171717)",
          950: "var(--aurora-neutral-950, #0a0a0a)",
        },
      },
      borderRadius: {
        "aurora-sm": "var(--aurora-radius-sm, 0.25rem)",
        "aurora-md": "var(--aurora-radius-md, 0.375rem)",
        "aurora-lg": "var(--aurora-radius-lg, 0.5rem)",
        "aurora-xl": "var(--aurora-radius-xl, 0.75rem)",
      },
      spacing: {
        "aurora-xs": "var(--aurora-spacing-xs, 0.5rem)",
        "aurora-sm": "var(--aurora-spacing-sm, 0.75rem)",
        "aurora-md": "var(--aurora-spacing-md, 1rem)",
        "aurora-lg": "var(--aurora-spacing-lg, 1.5rem)",
        "aurora-xl": "var(--aurora-spacing-xl, 2rem)",
      },
    },
  },
  plugins: [],
};
