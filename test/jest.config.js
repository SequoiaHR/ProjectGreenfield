module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:3000/product/1"
  },
  testMatch: ["**/specs/*.js"],
  transform: {
    "\\.js$": "react-scripts/config/jest/babelTransform"
  },
  verbose: true
};
