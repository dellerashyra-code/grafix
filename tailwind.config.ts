import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { navy: "#0b1f3a", blue: "#2563eb", sky: "#eaf3ff" } } },
  plugins: []
};
export default config;
