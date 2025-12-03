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
  testDir: './tests',

  // Pattern to match test files
  testMatch: '**/*.spec.js',

  // Enable parallel test execution for faster runs
  fullyParallel: true,

  // Fail the build if you accidentally left test.only in the source code
  forbidOnly: true,

  // Number of times to retry failed tests
  retries: 0,

  // Number of workers - use half of logical CPU cores for parallel execution
  workers: undefined,

  // Configure test reporters
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],

  // Default options for all tests
  use: {
    // Base URL for navigation
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',

    // Capture trace on first retry for debugging
    trace: 'on-first-retry',

    // Take screenshots on failure
    screenshot: 'only-on-failure',

    // Browser viewport
    viewport: { width: 1280, height: 720 },

    // Default timeout for actions
    actionTimeout: 30000,

    // Default navigation timeout
    navigationTimeout: 60000,
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});


