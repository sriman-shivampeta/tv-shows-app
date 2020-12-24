module.exports = {
  name: "tv-shows-app",
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.js"]
};
