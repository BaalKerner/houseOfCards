module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'karma-typescript'],
    files: [
      'src/**/*.spec.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.ts': 'karma-typescript'
    },
    plugins: [
      'karma-mocha',
      'karma-typescript',
      'karma-chrome-launcher'
    ],
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    autoWatch: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
