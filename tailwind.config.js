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
          "825px": {
            "max": "825px"
          },
          "720px": {
            "max": "720px"
          },
          "775px": {
            "max": "775px"
          },
          "640px": {
            "max": "640px"
          },
          "555px": {
            "max": "555px"
          },
          "390px": {
            "max": "390px"
          },
        },
        colors: {
          "dark": "#1b1b1b",
          "light-dark": "#202020",
          "main-blue": "#016990",
          "main-light": "#0AA5B4",
          "discord": "#5865F2",
          "light-gray": "#e4dad1"
        }
      },
    },
    plugins: [],
  }