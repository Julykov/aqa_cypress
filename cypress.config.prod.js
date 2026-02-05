const { defineConfig } = require("cypress");
const prodEnv = require("./cypress.env.prod.json");

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
    baseUrl: "https://qauto.forstudy.space/",
    viewportHeight: 900,
    viewportWidth: 1400,
    env: {
      ...prodEnv // Копируем всё из файла в переменные Cypress
    }
  },
});
