import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-green": "var(--brand-green)",
        "brand-pink": "var(--brand-pink)",
        "brand-blue": "var(--brand-blue)",
        "brand-yellow": "var(--brand-yellow)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee_20s_linear_infinite': 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
