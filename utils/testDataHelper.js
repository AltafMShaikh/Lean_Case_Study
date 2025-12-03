/**
 * Test Data Helper
 * Provides methods to retrieve test data from test-data.json
 */

// Import Node.js file system module to read files
const fs = require('fs');

// Import Node.js path module to handle file paths
const path = require('path');


// TestDataHelper class - manages loading and accessing test data
class TestDataHelper {

    // Constructor - loads test data from JSON file when instance is created
    constructor() {
        // Construct the full path to test-data.json file
        const testDataPath = path.join(__dirname, '../test-data/test-data.json');

        // Read the JSON file synchronously and parse it into JavaScript object
        this.testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));
    }


    /**
     * Get valid user credentials for login
     * @returns {Object} Object containing username and password
     */
    getValidUserCredentials() {
        // Return the validUser credentials from loaded test data
        return this.testData.credentials.validUser;
    }


    /**
     * Get locked user credentials (for negative testing)
     * @returns {Object} Object containing username and password
     */
    getLockedUserCredentials() {
        // Return the lockedUser credentials from loaded test data
        return this.testData.credentials.lockedUser;
    }


    /**
     * Get problem user credentials (for testing edge cases)
     * @returns {Object} Object containing username and password
     */
    getProblemUserCredentials() {
        // Return the problemUser credentials from loaded test data
        return this.testData.credentials.problemUser;
    }


    /**
     * Get customer information for checkout
     * @returns {Object} Object containing firstName, lastName, postalCode
     */
    getCustomerInfo() {
        // Return the validCustomer information from loaded test data
        return this.testData.customerInfo.validCustomer;
    }


    /**
     * Get all available credentials
     * @returns {Object} Object containing all credential types
     */
    getAllCredentials() {
        // Return the entire credentials object from loaded test data
        return this.testData.credentials;
    }


    /**
     * Get product names
     * @returns {Object} Object containing all product names
     */
    getProducts() {
        // Return the products object from loaded test data
        return this.testData.products;
    }
}


// Export the TestDataHelper class for use in tests
module.exports = TestDataHelper;
