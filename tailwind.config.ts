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
        bgGuidelines: "#F3F3F3",
      },
      backgroundImage: {
        gradationToday: "linear-gradient(117deg, #FFB6C1 0%, #FF69B4 100%)", // 핑크 계열
        gradationDeadline: "linear-gradient(117deg, #FFD700 0%, #FFA500 100%)", // 골드-오렌지 계열
        gradationDaily: "linear-gradient(117deg, #98FB98 0%, #32CD32 100%)", // 초록 계열
        gradationTime: "linear-gradient(117deg, #ADD8E6 0%, #1E90FF 100%)", // 파랑 계열
      },
      rotate: {
        "360": "360deg",
      },
    },
  },
  plugins: [],
} satisfies Config;
