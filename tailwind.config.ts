import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    blur: {
      xs: "2px",
      none: "0px",
    },

    fontFamily: {
      sans: ["var(--font-noto-sans)", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      banner: "1440px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgBLue: "#F2F6FD",
      },
      backgroundImage: {
        gradationBlue: "linear-gradient(117deg, #94C2FD -1%, #6D9BFF 96%)",
        gradationListTitle:
          "linear-gradient(287deg, #003CBE 0%, #4959E8 22%, #288DCB 50%, #5A8EFF 100%)",
      },
      rotate: {
        "360": "360deg",
      },
    },
  },
  plugins: [],
} satisfies Config;
