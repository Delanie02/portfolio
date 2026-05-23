import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio 2023 Theme
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
        // Portfolio 2023 - Wedding Theme
        // 'wedding-apple-port': '#6B2907',
        // 'wedding-blue-jean-jacket': '#307396',
        // 'wedding-blue-jean-light': '#62B2DB',
        // 'wedding-bouquet': '#82012F',
        // 'wedding-casey-folder': '#124D47',
        // 'wedding-charcoal': '#3E4650',
        // 'wedding-dc-engagement': '#0F4245',
        // 'wedding-engagement-dress': '#0B1C1C',
        // 'wedding-matt-boutineer': '#C9767E',
        // 'wedding-matt-engagement-shirt': '#4A3547',
        // 'wedding-matt-tie': '#8F7DA3',
        // 'wedding-orange-rose': '#BE2E22',
        // 'wedding-rings': '#9F6749',
        // 'wedding-rings-light': '#E09B76',
        // 'wedding-smoke': '#F8FAFB',
        // 'wedding-sparkling-rose': '#E78A43',
        // 'wedding-storm': '#6F7E8F',
        // 'wedding-tie-light': '#B4A5C5',
      },
      fontSize: {
        // Heading styles (px converted to rem, base 16px = 1rem)
        'h1': ['5rem', { lineHeight: '7.5rem', fontWeight: '400' }], // 80px
        'h1-bold': ['5rem', { lineHeight: '7.5rem', fontWeight: '700' }],
        'h1-italic': ['5rem', { lineHeight: '7.5rem', fontStyle: 'italic' }],

        'h2': ['3.125rem', { lineHeight: '4.6875rem', fontWeight: '400' }], // 50px
        'h2-bold': ['3.125rem', { lineHeight: '4.6875rem', fontWeight: '700' }],
        'h2-italic': ['3.125rem', { lineHeight: '4.6875rem', fontStyle: 'italic' }],

        'h3': ['2rem', { lineHeight: '3rem', fontWeight: '300' }], // 32px
        'h3-bold': ['2rem', { lineHeight: '3rem', fontWeight: '700' }],
        'h3-italic': ['2rem', { lineHeight: '3rem', fontStyle: 'italic' }],

        'h4': ['1.5rem', { lineHeight: '2.25rem', fontWeight: '300' }], // 24px
        'h4-bold': ['1.5rem', { lineHeight: '2.5rem', fontWeight: '700' }],

        'h5': ['1rem', { lineHeight: '1.5rem', fontWeight: '300' }], // 16px
        'h5-bold': ['1rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        'h5-italic': ['1rem', { lineHeight: '1.75rem', fontStyle: 'italic' }],
        'h5-extrabold': ['1rem', { lineHeight: '1.75rem', fontWeight: '800' }],

        // Body styles
        'body-xs': ['0.625rem', { lineHeight: '0.75rem', fontWeight: '400' }], // 10px
        'body-xs-bold': ['0.625rem', { lineHeight: '0.75rem', fontWeight: '600' }],

        'body-sm': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }], // 12px
        'body-sm-bold': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '600' }],
        'body-sm-italic': ['0.75rem', { lineHeight: '1.125rem', fontStyle: 'italic' }],

        'body-base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        'body-base-bold': ['1rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'body-base-italic': ['1rem', { lineHeight: '1.75rem', fontStyle: 'italic' }],

        'body-lg': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '400' }], // 20px
        'body-lg-bold': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '600' }],
        'body-lg-italic': ['1.25rem', { lineHeight: '1.875rem', fontStyle: 'italic' }],
        'body-lg-medium-italic': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '500', fontStyle: 'italic' }],

        // Resume styles
        'resume-body-xs': ['0.625rem', { lineHeight: '0.75rem', fontWeight: '300' }], // 10px
        'resume-body-xs-regular': ['0.625rem', { lineHeight: '0.75rem', fontWeight: '400' }],
        'resume-body-xs-semibold': ['0.625rem', { lineHeight: '0.75rem', fontWeight: '600' }],
      },
      fontFamily: {
        heading: ['Merriweather Sans', 'sans-serif'],
        body: ['Lora', 'serif'],
        resume: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
