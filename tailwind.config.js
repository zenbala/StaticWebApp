/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      // Custom scrollbar hide styles
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
      fontFamily: {
        sans: ['Satoshi-Regular', 'sans-serif'],
 // Default sans
      },
    //   theme: {
    //     extend: {
    //         colors: {
    //             primary: '#FFC107',
    //             secondary: '#005A9C',
    //             background: '#F5E7C3',
    //             text: '#333333',
    //         },
    //     },
    // },

      // Custom responsive width for logos (2 logos on mobile, 4 on desktop)
      width: {
        '1/2': '50%',
        '1/4': '25%',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // For hiding scrollbars easily
  ],
}
