/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        primary03: "var(--color-bg-primary-03)",
        secondary: "var(--color-bg-secondary)",
        tertiary: "var(--color-bg-tertiary)",
        button: "var(--color-bg-button)",
        // iconButton: "var(--color-icon-button)",
        buttonHover: "var(--color-bg-button-hover)",
        input: "var(--color-bg-input)",
      },
      textColor: {
        iconButton: "var(--color-icon-button)",
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        btnText: "var(--color-bg-secondary)",
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        input: "var(--color-bg-input)",
        accent: "var(--color-text-accent)",
      },
    },
  },
  plugins: [],
};
