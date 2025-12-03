/**
 * Constants and Configuration
 * All URLs, timeouts, and reusable values are defined here
 */

const CONSTANTS = {
    // Base URLs
    BASE_URL: 'https://www.saucedemo.com/',

    // Timeouts
    DEFAULT_TIMEOUT: 30000,
    NAVIGATION_TIMEOUT: 60000,

    // Test Configuration
    NUMBER_OF_PRODUCTS_TO_BUY: 3,

    // Locators - Login Page
    LOCATORS: {
        LOGIN: {
            USERNAME_INPUT: '#user-name',
            PASSWORD_INPUT: '#password',
            LOGIN_BUTTON: 'input[name="login-button"]',
            ERROR_MESSAGE: '[data-test="error"]'
        },

        INVENTORY: {
            INVENTORY_CONTAINER: '.inventory_list',
            INVENTORY_ITEM: '.inventory_item',
            ADD_TO_CART_BUTTON: '.inventory_item button',
            REMOVE_BUTTON: 'button:has-text("Remove")',
            PRODUCT_NAME: '.inventory_item_name',
            PRODUCT_PRICE: '.inventory_item_price',
            SHOPPING_CART_BADGE: '.shopping_cart_badge',
            SHOPPING_CART_LINK: 'a.shopping_cart_link'
        },

        CART: {
            CART_ITEM: '.cart_item',
            CART_ITEM_NAME: '.inventory_item_name',
            CART_ITEM_PRICE: '.inventory_item_price',
            CHECKOUT_BUTTON: '#checkout',
            CONTINUE_SHOPPING: '#continue-shopping',
            REMOVE_BUTTON: 'button:has-text("Remove")'
        },

        CHECKOUT: {
            FIRST_NAME_INPUT: '[data-test="firstName"]',
            LAST_NAME_INPUT: '[data-test="lastName"]',
            POSTAL_CODE_INPUT: '[data-test="postalCode"]',
            CONTINUE_BUTTON: '#continue',
            CANCEL_BUTTON: '#cancel',
            ERROR_MESSAGE: '[data-test="error"]'
        },

        CHECKOUT_OVERVIEW: {
            CART_ITEM: '.cart_item',
            FINISH_BUTTON: 'button:has-text("Finish")',
            CANCEL_BUTTON: '#cancel',
            SUBTOTAL: '.summary_subtotal_label',
            TAX: '.summary_tax_label',
            TOTAL: '.summary_total_label'
        },

        CHECKOUT_COMPLETE: {
            COMPLETE_HEADER: '.complete-header',
            COMPLETE_TEXT: '.complete-text',
            BACK_HOME_BUTTON: '#back-to-products'
        }
    },

    // Expected Messages
    MESSAGES: {
        ORDER_SUCCESS: 'Thank you for your order!',
        ORDER_DISPATCHED: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        LOGIN_ERROR: 'Epic sadface: Username and password do not match any user in this service',
        LOCKED_OUT_ERROR: 'Epic sadface: Sorry, this user has been locked out.'
    },

    // Screenshot paths
    SCREENSHOTS: {
        ORDER_CONFIRMATION: 'screenshots/order-confirmation.png',
        CART_PAGE: 'screenshots/cart-page.png',
        CHECKOUT_PAGE: 'screenshots/checkout-page.png'
    }
};

module.exports = CONSTANTS;

