import containerQueries from "@tailwindcss/container-queries";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [containerQueries],
};