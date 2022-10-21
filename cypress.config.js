const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl:"https://www-takifua1.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log(`Soy el console log del task ${message}`)
          return null
        }
      })
    },
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/*.js",
      "cypress/e2e/2-advanced-examples/*.js",
    ]

  },
});
