/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        blaze: '#FF6B00',
        blackish: '#121212',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.28)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(14,165,233,0.18), transparent 30%), radial-gradient(circle at bottom left, rgba(27,67,50,0.32), transparent 25%)',
      },
    },
  },
  plugins: [],
};
