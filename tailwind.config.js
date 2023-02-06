/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          "720px": {
            "max": "720px"
          },
          "775px": {
            "max": "775px"
          }
        },
        colors: {
          "main-blue": "#016990",
          "main-light": "#0AA5B4",
          "discord": "#5865F2",
          "light-gray": "#e4dad1"
        }
      },
    },
    plugins: [],
  }