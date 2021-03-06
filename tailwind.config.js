module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(0.5turn,rgba(255, 255, 255,0.5),rgba(255, 255, 255,0.0), rgba(255, 255, 255,0.9)), url('./assets/images/bg.png')",
        'appointment': " url('./assets/images/appointment.png')"
      },

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}