/**
 * Checkout Page Object Model
 * Handles checkout information page interactions
 */

// Import constants for locators and configuration (no hardcoding)
const CONSTANTS = require('../utils/constants');


// CheckoutPage class - manages checkout information form
class CheckoutPage {

    // Constructor - accepts Playwright page object
    constructor(page) {
        // Store page instance for use in all methods
        this.page = page;
    }


    /**
     * Enter first name in the checkout form
     * @param {string} firstName - The first name to enter
     */
    async enterFirstName(firstName) {
        // Locate first name input using selector from constants and fill with value
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.FIRST_NAME_INPUT).fill(firstName);
    }


    /**
     * Enter last name in the checkout form
     * @param {string} lastName - The last name to enter
     */
    async enterLastName(lastName) {
        // Locate last name input using selector from constants and fill with value
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.LAST_NAME_INPUT).fill(lastName);
    }


    /**
     * Enter postal code in the checkout form
     * @param {string} postalCode - The postal code to enter
     */
    async enterPostalCode(postalCode) {
        // Locate postal code input using selector from constants and fill with value
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.POSTAL_CODE_INPUT).fill(postalCode);
    }


    /**
     * Click continue button to proceed to next step
     */
    async clickContinue() {
        // Locate continue button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.CONTINUE_BUTTON).click();
    }


    /**
     * Click cancel button to go back
     */
    async clickCancel() {
        // Locate cancel button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.CANCEL_BUTTON).click();
    }


    /**
     * Fill all checkout information fields
     * @param {string} firstName - The first name
     * @param {string} lastName - The last name
     * @param {string} postalCode - The postal code
     */
    async fillCheckoutInformation(firstName, lastName, postalCode) {
        // Enter first name in the form
        await this.enterFirstName(firstName);

        // Enter last name in the form
        await this.enterLastName(lastName);

        // Enter postal code in the form
        await this.enterPostalCode(postalCode);
    }


    /**
     * Complete the entire checkout information step
     * @param {Object} customerInfo - Object containing firstName, lastName, postalCode
     */
    async completeCheckoutInfo(customerInfo) {
        // Fill all checkout fields using customer info object from test data
        await this.fillCheckoutInformation(
            customerInfo.firstName,    // Extract first name from customer info
            customerInfo.lastName,     // Extract last name from customer info
            customerInfo.postalCode    // Extract postal code from customer info
        );

        // Click continue button to proceed to overview
        await this.clickContinue();
    }


    /**
     * Get error message if validation fails
     * @returns {Promise<string>} The error message text
     */
    async getErrorMessage() {
        // Locate error message element and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT.ERROR_MESSAGE).textContent();
    }
}


// Export the CheckoutPage class for use in tests
module.exports = CheckoutPage;
