/**
 * Defaults are provided by Plugin-CLI.
 * Use this as a place to specify your overrides, then import it into `plugin-cli.config.js` and pass it there.
 */
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '^.+\\.(jsx|js|tsx|ts)?$',
    '!src/nls/index.js'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: [
    "<rootDir>/src"
  ],
  testMatch: ["test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
  modulePaths: ['<rootDir>']
};
