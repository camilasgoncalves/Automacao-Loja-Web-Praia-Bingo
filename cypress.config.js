const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    responseTimeout: 15000,
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
     
      on("task", {
        log(message) {
          console.log(message)
          return null
        },
      })

      return config;
    },
  },
})
