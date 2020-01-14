module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(c|sc|sa)ss$": "<rootDir>/src/__mocks__/module-mock.js"
  },
  collectCoverageFrom: ["**/src/**/*.js"]
};
