/**
 * E2E Test: User can buy 3 random products successfully
 *
 * This test automates the complete purchase flow on Saucedemo website:
 * 1. Login to the application
 * 2. Select 3 random products
 * 3. Add them to cart
 * 4. Complete checkout process
 * 5. Verify successful order completion
 *
 * Framework Structure:
 * - Uses Page Object Model (POM) design pattern
 * - Test data externalized in test-data.json
 * - Locators and constants centralized in constants.js
 * - No hardcoded values in test
 */

// Import Playwright test and expect functions for test execution
const { test, expect } = require('@playwright/test');

// Import Page Object classes for each page in the application
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');

// Import utility classes for test data and constants
const TestDataHelper = require('../utils/testDataHelper');
const CONSTANTS = require('../utils/constants');

// Define the test suite for E2E purchase flow
test.describe('E2E Purchase Flow Tests', () => {

    // Define the main test case for buying 3 random products
    test('User can buy 3 random products successfully', async ({ page }) => {

        // ==========================================
        // Initialize Test Data and Page Objects
        // ==========================================

        // Create an instance of TestDataHelper to load test data from JSON file
        const testDataHelper = new TestDataHelper();

        // Retrieve valid user credentials from test data (no hardcoding)
        const credentials = testDataHelper.getValidUserCredentials();

        // Retrieve customer information for checkout from test data (no hardcoding)
        const customerInfo = testDataHelper.getCustomerInfo();

        // Initialize all page object instances (simple approach - no fixtures)
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        // ==========================================
        // Step 1: Navigate to Saucedemo Website
        // ==========================================

        // Log the current step for better test tracking
        console.log('Step 1: Navigating to Saucedemo website...');

        // Navigate to the application URL using LoginPage method
        await loginPage.navigate();

        // ==========================================
        // Step 2: Login with Valid Credentials
        // ==========================================

        // Log the current step
        console.log('Step 2: Logging in with valid credentials...');

        // Perform login using credentials from test data (username and password from JSON)
        await loginPage.login(credentials.username, credentials.password);

        // ==========================================
        // Step 3: Select and Add Random Products
        // ==========================================

        // Log the current step with dynamic product count from constants
        console.log(`Step 3: Adding ${CONSTANTS.NUMBER_OF_PRODUCTS_TO_BUY} random products to cart...`);

        // Add random products to cart - number configured in constants.js (not hardcoded)
        await inventoryPage.addRandomProductsToCart(CONSTANTS.NUMBER_OF_PRODUCTS_TO_BUY);

        // ==========================================
        // Step 4: Navigate to Shopping Cart
        // ==========================================

        // Log the current step
        console.log('Step 4: Navigating to shopping cart...');

        // Click on shopping cart icon to view cart contents
        await inventoryPage.goToCart();

        // Get the count of items currently in the cart
        const cartItemsCount = await cartPage.getCartItemsCount();

        // Log the verification result for debugging
        console.log(`Verification: Cart contains ${cartItemsCount} items`);

        // Assert that cart contains exactly the expected number of products
        expect(cartItemsCount).toBe(CONSTANTS.NUMBER_OF_PRODUCTS_TO_BUY);

        // ==========================================
        // Step 5: Proceed to Checkout
        // ==========================================

        // Log the current step
        console.log('Step 5: Proceeding to checkout...');

        // Click the checkout button to proceed to checkout form
        await cartPage.clickCheckout();

        // ==========================================
        // Step 6: Fill Checkout Information
        // ==========================================

        // Log the current step
        console.log('Step 6: Filling checkout information...');

        // Fill and submit checkout form with customer data from test-data.json
        await checkoutPage.completeCheckoutInfo(customerInfo);

        // ==========================================
        // Step 7: Complete the Order
        // ==========================================

        // Log the current step
        console.log('Step 7: Completing the order...');

        // Click the finish button to complete the purchase
        await checkoutOverviewPage.clickFinish();

        // ==========================================
        // Step 8: Verify Successful Order Completion
        // ==========================================

        // Log the current step
        console.log('Step 8: Verifying order completion...');

        // Retrieve the success header text from the confirmation page
        const successHeader = await checkoutCompletePage.getSuccessHeader();

        // Assert that the success message matches expected text from constants.js (not hardcoded)
        expect(successHeader).toBe(CONSTANTS.MESSAGES.ORDER_SUCCESS);

        // Log successful verification result
        console.log(`✓ Order completed successfully: ${successHeader}`);

        // Capture a full-page screenshot of the order confirmation page for evidence
        await checkoutCompletePage.takeScreenshot();

        // Log screenshot save confirmation
        console.log('✓ Screenshot saved to screenshots/order-confirmation.png');

        // Retrieve the detailed success message text
        const successText = await checkoutCompletePage.getSuccessText();

        // Assert that the detailed message also matches expected text from constants
        expect(successText).toBe(CONSTANTS.MESSAGES.ORDER_DISPATCHED);

        // Log final verification success
        console.log('✓ All verifications passed!');
    });

});
