module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({

      //   'heroimg':
      //     "linear-gradient(to right bottom, rgba(255, 255, 255,0.4), rgba(255, 255, 255,0.4), url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')",
      // }),

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