// This file is here so that jest tests can be written in using esm modules.
module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  modulePathIgnorePatterns: ["dist/"]
}
