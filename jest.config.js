module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['^.+\\.js$'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js'],
}