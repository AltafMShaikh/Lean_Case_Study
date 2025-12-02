/**
 * Playwright Configuration File
 *
 * This file configures all settings for Playwright test execution including:
 * - Test directory location
 * - Browser configurations
 * - Reporter settings
 * - Default behaviors and options
 */

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Directory where test files are located
  testDir: './Test',

  // Pattern to match test files (all .js files in test directory)
  testMatch: '**/*.js',

  // Enable parallel test execution for faster runs
  fullyParallel: true,

  // Number of times to retry failed tests (0 = no retries)
  retries: 0,

  // Configure test reporters
  // 'html' - generates interactive HTML report in playwright-report folder
  // 'list' - prints test results to console
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],

  // Default options for all tests
  use: {
    // Base URL for navigation (can use relative paths in tests)
    baseURL: 'https://www.saucedemo.com/',

    // Capture trace only when test is retried (for debugging)
    trace: 'on-first-retry',

    // Take screenshots only when tests fail
    screenshot: 'only-on-failure',
  },

  // Browser projects to run tests on
  projects: [
    {
      // Project name
      name: 'chromium',

      // Use Desktop Chrome browser configuration
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

