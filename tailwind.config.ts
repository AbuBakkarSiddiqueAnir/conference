import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.938rem",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1320px",
      },
    },
    borderRadius: {
      xs: "3px",
      sm: "8px",
      md: "16px",
      lg: "30px",
      xl: "50px",
      full: "100%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at bottom left, #00E9EA, #1F80F0 30%, #0B305B)",
      },
      fontFamily: {
        Inter: ["Inter Variable", "sans-serif"],
      },
      colors: {
        primary: "#FFC93E",
        accent: "#2563EB",
        secondary: "#111D5E",
        gray: "#617187",
        "light-gray": "#CDCDCD",
        "dart-gray": "#F9FAFB",
      },
      fontSize: {
        "h-huge": [
          "clamp(3rem, 7.5vw + 1rem, 8.75rem)",
          {
            lineHeight: "100%",
            fontWeight: "700",
            letterSpacing: "0.01rem",
          },
        ],
        "h-large": [
          "clamp(1.5rem, 2.5vw + 1rem, 3rem)",
          {
            lineHeight: "100%",
            fontWeight: "700",
            letterSpacing: "0.01rem",
          },
        ],
        "body-1": [
          "clamp(1rem, 1.5vw + 0.3rem, 1.125rem)",
          {
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],
        "body-2": [
          "clamp(0.75rem, 1vw + 0.5rem, 1rem)",
          {
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],
        "body-3": [
          "clamp(1rem, 1.5vw + 0.5rem, 1.25rem)",
          {
            lineHeight: "250%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],
        "body-fixed-1": [
          "1.125rem",
          {
            lineHeight: "100%",
            fontWeight: "500",
            letterSpacing: "0.01rem",
          },
        ],
        "body-fixed-2": [
          "0.75rem",
          {
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      spacing: {
        xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "64px",
        xl: "128px",
      },

      boxShadow: {
        card: "0px -4px 2px 0px #CDCDCD",
      },
    },
  },
  plugins: [],
};
export default config;
