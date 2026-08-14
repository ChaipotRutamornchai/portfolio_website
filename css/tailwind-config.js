// Shared Tailwind config for the whole site.
// Loaded by every page BEFORE the Tailwind CDN script runs, so all pages
// resolve the same design tokens. Edit colors/fonts/spacing here once —
// every page picks up the change automatically.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        "on-primary": "#FFFFFF",
        "primary-container": "#2E1065",
        "on-primary-container": "#DDD6FE",

        secondary: "#334155",

        surface: "#0B0B0B",
        "on-surface": "#F5F5F5",
        "on-surface-variant": "#A3A3A3",
        "surface-variant": "#1A1A1A",
        "surface-container-lowest": "#050505",
        "surface-container-low": "#121212",

        outline: "#404040",
        "outline-variant": "#262626",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Public Sans", "sans-serif"],
        display: ["Public Sans", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
        label: ["Public Sans", "sans-serif"],
      },
      spacing: {
        gutter: "2rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
      },
      maxWidth: {
        "container-max": "1440px",
      },
    },
  },
};
