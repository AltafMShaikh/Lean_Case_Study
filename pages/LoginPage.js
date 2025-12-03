/**
 * Login Page Object Model
 * Handles all login page interactions
 */

// Import constants file to access all locators and configuration (no hardcoding)
const CONSTANTS = require('../utils/constants');


// LoginPage class - encapsulates all login page elements and actions
class LoginPage {

    // Constructor - accepts page object from Playwright
    constructor(page) {
        // Store the page instance for use in all methods
        this.page = page;
    }


    /**
     * Navigate to login page
     */
    async navigate() {
        // Navigate to the base URL from constants.js (not hardcoded)
        await this.page.goto(CONSTANTS.BASE_URL);
    }


    /**
     * Enter username into the username input field
     * @param {string} username - The username to enter
     */
    async enterUsername(username) {
        // Locate username input using selector from constants and fill with provided value
        await this.page.locator(CONSTANTS.LOCATORS.LOGIN.USERNAME_INPUT).fill(username);
    }


    /**
     * Enter password into the password input field
     * @param {string} password - The password to enter
     */
    async enterPassword(password) {
        // Locate password input using selector from constants and fill with provided value
        await this.page.locator(CONSTANTS.LOCATORS.LOGIN.PASSWORD_INPUT).fill(password);
    }


    /**
     * Click the login button to submit credentials
     */
    async clickLoginButton() {
        // Locate login button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.LOGIN.LOGIN_BUTTON).click();
    }


    /**
     * Complete login flow - high-level method combining all login steps
     * @param {string} username - The username to login with
     * @param {string} password - The password to login with
     */
    async login(username, password) {
        // Step 1: Enter the username
        await this.enterUsername(username);

        // Step 2: Enter the password
        await this.enterPassword(password);

        // Step 3: Click login button to submit
        await this.clickLoginButton();
    }


    /**
     * Get error message text displayed on login failure
     * @returns {Promise<string>} The error message text
     */
    async getErrorMessage() {
        // Locate error message element and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.LOGIN.ERROR_MESSAGE).textContent();
    }
}


// Export the LoginPage class for use in tests
module.exports = LoginPage;
