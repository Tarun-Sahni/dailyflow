/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
     extend: {
      colors: {
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
      },
    },
  },
  plugins: [],
}