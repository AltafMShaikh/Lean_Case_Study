/**
 * Checkout Complete Page Object Model
 * Handles order confirmation page interactions
 */

// Import constants for locators and messages (no hardcoding)
const CONSTANTS = require('../utils/constants');

// CheckoutCompletePage class - manages order confirmation page
class CheckoutCompletePage {

    // Constructor - accepts Playwright page object
    constructor(page) {
        // Store page instance for use in all methods
        this.page = page;
    }

    /**
     * Get the success header message from confirmation page
     * @returns {Promise<string>} The success header text
     */
    async getSuccessHeader() {
        // Locate success header element and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_COMPLETE.COMPLETE_HEADER).textContent();
    }

    /**
     * Get the detailed success message text
     * @returns {Promise<string>} The success message text
     */
    async getSuccessText() {
        // Locate success text element and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_COMPLETE.COMPLETE_TEXT).textContent();
    }

    /**
     * Click back home button to return to products page
     */
    async clickBackHome() {
        // Locate back home button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_COMPLETE.BACK_HOME_BUTTON).click();
    }

    /**
     * Verify that the order was completed successfully
     * @returns {Promise<boolean>} True if order success message matches expected text
     */
    async verifyOrderSuccess() {
        // Get the success header text
        const header = await this.getSuccessHeader();

        // Compare with expected message from constants and return boolean result
        return header === CONSTANTS.MESSAGES.ORDER_SUCCESS;
    }

    /**
     * Take a screenshot of the confirmation page for evidence
     * @param {string} path - Optional custom path for screenshot (defaults to constant)
     */
    async takeScreenshot(path = CONSTANTS.SCREENSHOTS.ORDER_CONFIRMATION) {
        // Capture full page screenshot and save to specified path
        await this.page.screenshot({ path: path, fullPage: true });
    }
}

// Export the CheckoutCompletePage class for use in tests
module.exports = CheckoutCompletePage;
