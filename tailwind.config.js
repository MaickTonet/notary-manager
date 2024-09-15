/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f8f8ff',
      },
      fontFamily: {
        sans: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.action-button': {
          '@apply border-2 border-dashed border-black/50 p-3 font-bold text-xl w-fit rounded-md shadow hover:text-black hover:border-black   transition-all hover:shadow-md ease-in-out delay-100  text-zinc-600 outline-none': {},
        },
        '.action-button-secondary': {
          '@apply border border-black/50 p-3 font-bold text-xl w-fit rounded-md shadow hover:text-black hover:border-black   transition-all hover:shadow-md ease-in-out delay-100  text-zinc-600 outline-none': {},
        },
        '.sucess-button': {
          '@apply bg-blue-600 font-bold text-white text-lg p-1 rounded-md outline-none shadow hover:shadow-md hover:bg-blue-700 transition-all md:w-[60%] w-full': {},
        },
        '.cancel-button': {
          '@apply bg-red-600 font-bold text-white text-lg p-1 rounded-md outline-none shadow hover:shadow-md hover:bg-red-700 transition-all md:w-[60%] w-full': {},
        },
        '.action-card': {
          '@apply border  border-black/20 bg-white p-2 shadow rounded-md transition-all hover:shadow-md md:max-w-md text-zinc-600 hover:text-black cursor-pointer outline-none': {},
        },
        '.form-input': {
          '@apply p-2 border border-black/30 rounded outline-none text-lg': {},
        },
        '.modal-style': {
          '@apply flex flex-col gap-4 bg-white p-6 rounded w-[80%] md:w-[50%] max-h-[80%] overflow-y-auto shadow-lg md:px-12': {},
        },
      })
    },
  ],
}

