  module.exports = function(config) {
    config.set({
        files: ['test/test.js', { pattern: 'index.js', included: false, mutated: true }],
        testFramework: 'mocha',
        testRunner: 'mocha',
        reporter: ['progress', 'clear-text', 'event-recorder'],
        testSelector: null,
        plugins: ['stryker-mocha-runner']
    });
  };