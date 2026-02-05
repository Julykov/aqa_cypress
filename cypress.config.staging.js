const { defineConfig } = require("cypress");
const stagingEnv = require("./cypress.env.staging.json");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto2.forstudy.space/",
    viewportHeight: 900,
    viewportWidth: 1400,
    env: {
      ...stagingEnv // Копируем всё из файла в переменные Cypress
    }
  },
});
