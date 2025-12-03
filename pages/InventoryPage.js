/**
 * Inventory Page Object Model
 * Handles all product listing and cart interactions
 */

// Import constants to access locators (no hardcoded selectors)
const CONSTANTS = require('../utils/constants');

// InventoryPage class - manages product page interactions
class InventoryPage {

    // Constructor - accepts Playwright page object
    constructor(page) {
        // Store page instance for use in all methods
        this.page = page;
    }

    /**
     * Get all "Add to Cart" buttons on the inventory page
     * @returns {Promise<Array>} Array of all Add to Cart button elements
     */
    async getAllAddToCartButtons() {
        // Locate all "Add to Cart" buttons using selector from constants and return as array
        return await this.page.locator(CONSTANTS.LOCATORS.INVENTORY.ADD_TO_CART_BUTTON).all();
    }

    /**
     * Add random products to cart
     * @param {number} numberOfProducts - How many random products to add
     * @returns {Promise<Array>} Array of indexes of products that were added
     */
    async addRandomProductsToCart(numberOfProducts) {
        // Get all available "Add to Cart" buttons
        const items = await this.getAllAddToCartButtons();

        // Generate random unique indexes for product selection
        const randomIndexes = this.getRandomIndexes(items.length, numberOfProducts);

        // Loop through each random index and click the corresponding button
        for (let index of randomIndexes) {
            // Click the "Add to Cart" button at this index
            await items[index].click();
        }

        // Return the indexes that were selected (useful for tracking)
        return randomIndexes;
    }

    /**
     * Generate random unique indexes for product selection
     * @param {number} maxLength - Maximum index value (total items available)
     * @param {number} count - How many unique indexes to generate
     * @returns {Array<number>} Array of unique random indexes
     */
    getRandomIndexes(maxLength, count) {
        // Initialize empty array to store unique random indexes
        const randomIndexes = [];

        // Keep generating until we have the desired count of unique indexes
        while (randomIndexes.length < count) {
            // Generate a random index between 0 and maxLength-1
            const index = Math.floor(Math.random() * maxLength);

            // Only add the index if it's not already in our array (ensure uniqueness)
            if (!randomIndexes.includes(index)) {
                randomIndexes.push(index);
            }
        }

        // Return the array of unique random indexes
        return randomIndexes;
    }

    /**
     * Click on shopping cart icon to navigate to cart page
     */
    async goToCart() {
        // Locate shopping cart link using selector from constants and click it
        await this.page.locator(CONSTANTS.LOCATORS.INVENTORY.SHOPPING_CART_LINK).click();
    }

    /**
     * Get the cart badge count (number shown on cart icon)
     * @returns {Promise<number>} The number of items in cart
     */
    async getCartBadgeCount() {
        // Locate the cart badge element
        const badge = this.page.locator(CONSTANTS.LOCATORS.INVENTORY.SHOPPING_CART_BADGE);

        // Get the text content of the badge
        const text = await badge.textContent();

        // Convert text to integer and return
        return parseInt(text);
    }

    /**
     * Add a specific product to cart by its index
     * @param {number} index - The index of the product to add
     */
    async addProductToCartByIndex(index) {
        // Get all available "Add to Cart" buttons
        const items = await this.getAllAddToCartButtons();

        // Click the button at the specified index
        await items[index].click();
    }

    /**
     * Get all product names displayed on the page
     * @returns {Promise<Array<string>>} Array of all product names
     */
    async getAllProductNames() {
        // Locate all product name elements and return their text contents as array
        return await this.page.locator(CONSTANTS.LOCATORS.INVENTORY.PRODUCT_NAME).allTextContents();
    }
}

// Export the InventoryPage class for use in tests
module.exports = InventoryPage;
