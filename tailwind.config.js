/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        secondary: "#2F6FAE",
        accent: "#4F8CC9",
        sectionBg: "#F8FAFC",
        footerBg: "#F1F3F6",
        borderSoft: "#E5E7EB",
        textPrimary: "#111827",
        textSecondary: "#4B5563",
      },
      fontFamily: {
        heading: ["'Trebuchet MS'", "'Segoe UI'", "sans-serif"],
        body: ["'Trebuchet MS'", "'Segoe UI'", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(15, 76, 129, 0.06)",
        card: "0 2px 16px rgba(15, 76, 129, 0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
