module.exports = {
    displayName: "payment-integration",
    preset: '../../jest.preset.js',
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.spec.json'
        }
    },
    setupFilesAfterEnv: ['../../jest-setup.js'],
    coverageDirectory: '../../coverage/packages/payment-integration',
    collectCoverageFrom: [],
};
