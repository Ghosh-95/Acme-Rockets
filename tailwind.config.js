/** @type {import('tailwindcss').Config} */
export const content = ['./build/*.{html,js}'];
export const theme = {
  extend: {
    screen: {
      'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
    },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '80%': { transform: 'scaleY(1.2)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
    animation: {
      'menu-open': 'open-menu 0.5s ease-in-out forwards',
    }
  },
};
export const plugins = [];

