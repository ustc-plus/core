import type { Config } from 'tailwindcss'
import flowbite from 'flowbite-react/tailwind'

const config: Config = {
  theme: {},
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', flowbite.content()],
  plugins: [require('@tailwindcss/typography'), require('daisyui'), flowbite.plugin()],
  daisyui: {
    // More details at https://daisyui.com/docs/config/
    themes: ['dark'],
  },
}
export default config
