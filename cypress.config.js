const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    responseTimeout: 15000,
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },
  },
});
