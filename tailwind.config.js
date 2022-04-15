module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        tableHeader: ["calc(14rem / 16)", { lineHeight: "calc(20rem / 16)" }],
        tableCellName: ["calc(13rem / 16)", { lineHeight: "calc(20rem / 16)" }],
        tableCellModified: [
          "calc(12rem / 16)",
          { lineHeight: "calc(20rem / 16)" },
        ],
      },
    },
  },
  plugins: [],
};
