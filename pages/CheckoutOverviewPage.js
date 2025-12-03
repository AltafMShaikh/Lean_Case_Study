/**
 * Checkout Overview Page Object Model
 * Handles checkout overview/summary page interactions
 */

// Import constants for locators (no hardcoded selectors)
const CONSTANTS = require('../utils/constants');

// CheckoutOverviewPage class - manages order summary/review page
class CheckoutOverviewPage {

    // Constructor - accepts Playwright page object
    constructor(page) {
        // Store page instance for use in all methods
        this.page = page;
    }

    /**
     * Get all cart items displayed in the checkout overview
     * @returns {Promise<Array>} Array of all cart item elements
     */
    async getAllCartItems() {
        // Locate all cart items in overview using selector from constants
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.CART_ITEM).all();
    }

    /**
     * Click finish button to complete the purchase
     */
    async clickFinish() {
        // Locate finish button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.FINISH_BUTTON).click();
    }

    /**
     * Click cancel button to go back
     */
    async clickCancel() {
        // Locate cancel button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.CANCEL_BUTTON).click();
    }

    /**
     * Get the subtotal amount displayed
     * @returns {Promise<string>} The subtotal text
     */
    async getSubtotal() {
        // Locate subtotal label and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.SUBTOTAL).textContent();
    }

    /**
     * Get the tax amount displayed
     * @returns {Promise<string>} The tax text
     */
    async getTax() {
        // Locate tax label and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.TAX).textContent();
    }

    /**
     * Get the total amount displayed (subtotal + tax)
     * @returns {Promise<string>} The total text
     */
    async getTotal() {
        // Locate total label and return its text content
        return await this.page.locator(CONSTANTS.LOCATORS.CHECKOUT_OVERVIEW.TOTAL).textContent();
    }
}

// Export the CheckoutOverviewPage class for use in tests
module.exports = CheckoutOverviewPage;
