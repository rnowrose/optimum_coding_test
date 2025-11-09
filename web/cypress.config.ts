import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173', // Your dev server URL
    specPattern: 'cypress/specs/**/*.cy.{js,jsx,ts,tsx}', // Pattern to find test files
  },
});