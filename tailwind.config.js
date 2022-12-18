module.exports = {
  theme: {
    screens: {
      sm: "400px",
      // => @media (min-width: 400px) { ... }

      md: "700px",
      // => @media (min-width: 700px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
