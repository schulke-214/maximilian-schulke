module.exports = {
	roots: ['<rootDir>/src'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/testing/__mocks__/files.ts',
	},
	testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
	testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>/public'],
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
	setupFiles: ['<rootDir>/src/testing/__setup__/loadershim.ts'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFilesAfterEnv: ['<rootDir>/src/testing/__setup__/enzyme.ts'],
	transform: {'^.+\\.(ts|tsx)$': 'ts-jest', '^.+\\.(js|jsx)?$': '<rootDir>/src/testing/preprocess.js'},
	globals: {__PATH_PREFIX__: ''},
	testURL: 'http://localhost'
};