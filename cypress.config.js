const { defineConfig } = require("cypress");

// 1. Require the dotenv package to load variables from .env
const dotenv = require('dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      dotenv.config();

      config.env.userEmail = process.env.EMAIL;       
      config.env.userPassword = process.env.PASSWORD; 
      config.baseUrl = process.env.BASE_URL;

      return config;
    },
  },
});