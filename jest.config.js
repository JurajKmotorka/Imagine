module.exports = {
  testEnvironment: "jsdom", // Use JSDOM environment for testing
  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"], // Set up cleanup for each test using React Testing Library
};
