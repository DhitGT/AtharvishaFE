/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app.vue",
      "./pages/**/*.vue",
      "./pages/**/**.vue",
      "./pages/**/**/*.vue",
      "./pages/*.vue",
      "./components/**/*.vue",
      "./components/**/**.vue",
      "./layouts/**/*.vue",
      "./*",
    ],
    theme: {
      extend: {
        maskImage: {
          'gradient-fade': 'linear-gradient(to top, black, transparent)',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.mask-gradient-fade': {
            maskImage: 'linear-gradient(to top, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
          },
        })
      }
    ],
  };
  