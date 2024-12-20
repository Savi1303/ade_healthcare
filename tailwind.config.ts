import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 5s linear infinite',
        'scroll-sm': 'scroll 10s linear infinite', // Faster for smaller screens
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-114%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      sm: '640px',  // Small screens
      md: '768px',  // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra-large screens
      '2xl': '1536px', // 2X Extra-large screens
    },
  },
  plugins: [],
} satisfies Config;
