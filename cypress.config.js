const { defineConfig } = require("cypress");
require("dotenv").config();  // must be before config

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
    },
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      return config;
    },
    
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
      
    },
  },
});
