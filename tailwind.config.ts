import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          dark: '#1C4F20',
          mid: '#237D32',
          light: '#C1EAC6',
        },
        mist: {
          dark: '#324A63',
          mid: '#607A93',
          light: '#DCE8F3',
        },
        ocean: {
          dark: '#00505E',
          mid: '#007C91',
          light: '#B2E2E5',
        },
        purple: {
          dark: '#3A1F4E',
          mid: '#6F4C7B',
          light: '#D8CFE8',
        },
        sand: {
          dark: '#A8906C',
          mid: '#D2B48C',
          light: '#F5EBDD',
        },
        neutral: {
          dark: '#2A2D31',
          mid: '#B0B7BD',
          'balanced-light': '#F9FAF9',
          'cool-light': '#FAFCFD',
          'warm-light': '#FCFAF7',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'serif'],
        resume: ['var(--font-resume)', 'sans-serif'], // ← was missing!
      },
    },
  },
  plugins: [],
};

export default config;
