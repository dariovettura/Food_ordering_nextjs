module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '400':'400px',
      '80vh':'80vh',
      '40vh':'40vh'
     },
   
    extend: {},
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
