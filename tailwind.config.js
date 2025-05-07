/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        projectCard: '0 0 20px #515151',
      },

      keyframes: {
        'fade-opacity': {
          '0%': { opacity: '0.1' },
          '100%': { opacity: '0.2' },
        },
      },
      animation: {
        'fade-opacity': 'fade-opacity 3s ease-in-out infinite alternate',
      },
      
    }
  },
  plugins: [],
}
