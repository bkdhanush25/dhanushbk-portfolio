import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'blackbg-gif': "url('https://i.pinimg.com/originals/80/f4/b4/80f4b4c09340c2e7c46ca4254a14d9ff.gif')",
          'recomflix-mockup': "url('/recomflix-mockup.png')",
          'bode-mockup': "url('/bode-mockup.png')",
          'freakmillionaire-mockup': "url('/freakmillionaire-mockup.png')",
          'nwmglobal-mockup': "url('/nwmglobal-mockup.png')",
          'primeindustry-mockup': "url('/primeindustry-mockup.png')",
          'coldemailai-mockup': "url('/coldemailai-mockup.png')",
          'portfolio-mockup': "url('/portfolio-mockup.png')",
          'nutrientai-mockup': "url('/nutrientai-mockup.png')",
          'black-primary-bg': "url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')"
      },
      colors:{
        'light-black': '#171717',
        'slate-black': '#344053',
        'hover-black': '#2b2b2b',
        'primary-color': '#FD853A',
        'primary-gray': '#98A1B2'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
