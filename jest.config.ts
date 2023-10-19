import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.svg$': 'jest-transformer-svg',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/src/configs/test/fileMock.ts',
  },
  testPathIgnorePatterns: ['"node_modules/(?!(module))"'],
  transformIgnorePatterns: ['"node_modules/(?!(module))"'],
  modulePathIgnorePatterns: ['"node_modules/(?!(module))"'],
  setupFilesAfterEnv: ['<rootDir>/src/configs/test/setupTests.ts'],
}

export default config