import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'blackbg-gif': "url('https://i.pinimg.com/originals/80/f4/b4/80f4b4c09340c2e7c46ca4254a14d9ff.gif')"
      },
      colors:{
        'light-black': '#171717',
        'hover-black': '#2b2b2b',
        'primary-color': '#FD853A'
      },
    },
  },
  plugins: [],
}
export default config
