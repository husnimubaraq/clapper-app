/** @type {import('jest').Config} */
/* eslint-disable unicorn/prefer-module */
const config = {
	preset: "jest-expo",
	setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
};

module.exports = config;