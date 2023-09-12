import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      colors: {
        primary: '#43418E',
        second: '#1C1B3C',
        description: '#6D6D6D',
        inHover: '#1C1C3B',
        personal: '#44448C',
        flag_bg: '#D0D0ED',
        line: '#D7D7D7',
        base: '#f6f6f6',
        textCard: '#484860',
        selection: {
          primary: '#605FB4',
        },
        button: {
          primary: {
            background: '#FFF',
            text: '#1C1B3C',
            border: 'transparent',
            hover: {
              background: '#FFF',
              text: '#1C1B3C',
              border: '#1C1B3C',
            },
          },
          second: {
            background: '#1C1B3C',
            text: '#FFF',
            border: '#1C1B3C',
            hover: {
              background: '#FFF',
              text: '#1C1B3C',
            },
          },
        },
        header: {
          background: '#FFFF',
          text: '#1B1B1B',
          textHover: '#6D6D6D',
          line: '#D7D7D7',
        },
        footer: {
          background: '#F6F6F6',
          text: '#1B1B1B',
          textHover: '#6D6D6D',
          line: '#D7D7D7',
        },
      },
      screens: {
        sm: '480px',
        md: '600px',
        tablet: '800px',
        lg: '1080px',
        desktop: '1380px',
        monitor: '1680px',
      },
    },
  },
  plugins: [],
}
export default config
