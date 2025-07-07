import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
      // implement node event listeners here
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  }
});
