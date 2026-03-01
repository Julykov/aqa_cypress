const { defineConfig } = require("cypress");


let prodEnv
try {
  prodEnv = require("./cypress.env.prod.json");
} catch (e) {
  prodEnv = {}
}

module.exports = defineConfig({
  // ----- reports settings --------------------
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  // --------------------------------------------
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportHeight: 900,
    viewportWidth: 1400,
    env: {
      LOGIN: prodEnv.LOGIN || process.env.USER_EMAIL,
      PASSWORD: prodEnv.PASSWORD || process.env.USER_PASSWORD
    }
  },
});