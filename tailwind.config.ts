import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
      // colors: {
      //   // テキストカラーを追加
      //   text: {
      //     DEFAULT: '#1E1E1E', // デフォルトのテキストカラー
      //   },
      //   // 線（ボーダー）のデフォルトカラーを追加
      //   border: {
      //     DEFAULT: '#1E1E1E', // ここでデフォルトの線の色を設定
      //   }
      // }
    }
  },
  plugins: [],
};
export default config;
