module.exports = {
  globals: {
    __DEV__: true
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(c|sc|sa)ss$": "<rootDir>/src/__mocks__/module-mock.js"
  },
  collectCoverageFrom: ["**/src/**/*.js"],
  testEnvironment: "jest-environment-jsdom"
};
