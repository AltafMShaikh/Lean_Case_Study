/**
 * E2E Test: User can buy 3 random products successfully
 *
 * This test automates the complete purchase flow on Saucedemo website:
 * 1. Login to the application
 * 2. Select 3 random products
 * 3. Add them to cart
 * 4. Complete checkout process
 * 5. Verify successful order completion
 */

const { test, expect } = require('@playwright/test');

test('User can buy 3 random products successfully', async ({ page }) => {

    // ==========================================
    // Step 1: Navigate to Saucedemo Website
    // ==========================================
    await page.goto('https://www.saucedemo.com/');

    // ==========================================
    // Step 2: Login with Valid Credentials
    // ==========================================
    // Enter username in the login field
    await page.locator('#user-name').fill('standard_user');

    // Enter password in the password field
    await page.locator('#password').fill('secret_sauce');

    // Click the login button to authenticate
    await page.locator('input[name="login-button"]').click();

    // ==========================================
    // Step 3: Select and Add Random Products
    // ==========================================
    // Get all "Add to Cart" buttons from the product inventory
    const items = await page.locator('.inventory_item button').all();

    // Generate 3 unique random indexes to select different products
    let randomIndexes = [];
    while (randomIndexes.length < 3) {
        // Generate a random index within the range of available products
        let index = Math.floor(Math.random() * items.length);

        // Only add index if it's not already selected (ensures uniqueness)
        if (!randomIndexes.includes(index)) {
            randomIndexes.push(index);
        }
    }

    // Click "Add to Cart" button for each randomly selected product
    for (let i of randomIndexes) {
        await items[i].click();
    }

    // ==========================================
    // Step 4: Navigate to Shopping Cart
    // ==========================================
    // Click on the shopping cart icon to view cart items
    await page.locator('a.shopping_cart_link').click();

    // Verify that exactly 3 items are present in the cart
    const cartItems = await page.locator('.cart_item').all();
    expect(cartItems.length).toBe(3);

    // ==========================================
    // Step 5: Complete Checkout Process
    // ==========================================
    // Click the checkout button to proceed
    await page.locator('#checkout').click();

    // Fill in customer information - First Name
    await page.getByPlaceholder('First Name').fill('Altaf');

    // Fill in customer information - Last Name
    await page.getByPlaceholder('Last Name').fill('Shaikh');

    // Fill in customer information - Zip/Postal Code
    await page.getByPlaceholder('Zip/Postal Code').fill('400088');

    // Click continue to proceed to order summary
    await page.locator('#continue').click();

    // Click finish button to complete the order
    await page.locator('button:has-text("Finish")').click();

    // ==========================================
    // Step 6: Verify Successful Order Completion
    // ==========================================
    // Locate the order confirmation message
    const successMsg = await page.locator('.complete-header');

    // Assert that the success message displays the expected text
    await expect(successMsg).toHaveText('Thank you for your order!');

    // Take a full-page screenshot of the order confirmation for documentation
    await page.screenshot({ path: 'order-confirmation.png', fullPage: true });

});

