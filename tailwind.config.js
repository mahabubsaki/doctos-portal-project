module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        projectPrimary: "#0FCFEC",
        projectSecondary: "#19D3AE",
        projectAccent: "#3A4256",
        projectNeutral: "#3d4451",
      },
    },
  },
  plugins: [require("daisyui")],
}