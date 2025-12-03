/**
 * Cart Page Object Model
 * Handles shopping cart page interactions
 */

// Import constants for locators (no hardcoded selectors)
const CONSTANTS = require('../utils/constants');

// CartPage class - manages shopping cart page interactions
class CartPage {

    // Constructor - accepts Playwright page object
    constructor(page) {
        // Store page instance for use in all methods
        this.page = page;
    }

    /**
     * Get all cart items currently in the shopping cart
     * @returns {Promise<Array>} Array of all cart item elements
     */
    async getAllCartItems() {
        // Locate all cart items using selector from constants and return as array
        return await this.page.locator(CONSTANTS.LOCATORS.CART.CART_ITEM).all();
    }

    /**
     * Get the count of items in the shopping cart
     * @returns {Promise<number>} The number of items in cart
     */
    async getCartItemsCount() {
        // Get all cart items
        const items = await this.getAllCartItems();

        // Return the length of the array (number of items)
        return items.length;
    }

    /**
     * Click the checkout button to proceed to checkout
     */
    async clickCheckout() {
        // Locate checkout button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CART.CHECKOUT_BUTTON).click();
    }

    /**
     * Click continue shopping button to return to products page
     */
    async clickContinueShopping() {
        // Locate continue shopping button using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.CART.CONTINUE_SHOPPING).click();
    }

    /**
     * Get all cart item names
     * @returns {Promise<Array<string>>} Array of all item names in cart
     */
    async getCartItemNames() {
        // Locate all cart item name elements and return their text contents as array
        return await this.page.locator(CONSTANTS.LOCATORS.CART.CART_ITEM_NAME).allTextContents();
    }

    /**
     * Remove an item from cart by its index
     * @param {number} index - The index of the item to remove
     */
    async removeItemByIndex(index) {
        // Get all remove buttons in the cart
        const removeButtons = await this.page.locator(CONSTANTS.LOCATORS.CART.REMOVE_BUTTON).all();

        // Click the remove button at the specified index
        await removeButtons[index].click();
    }
}

// Export the CartPage class for use in tests
module.exports = CartPage;
