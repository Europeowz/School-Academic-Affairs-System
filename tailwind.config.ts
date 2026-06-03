import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false, // 不重置样式，我们用自定义 CSS 变量
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
