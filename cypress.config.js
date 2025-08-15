const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    responseTimeout:15000,
    defaultCommandTimeout:15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
  module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here if necessário
      return config
    },
  },
})