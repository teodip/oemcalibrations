import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        bone: "var(--bone)",
        "bone-2": "var(--bone-2)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
      },
      fontFamily: {
        serif: ['"Newsreader"', "ui-serif", "Georgia", "serif"],
        sans: ['"Geist Variable"', '"Geist"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
