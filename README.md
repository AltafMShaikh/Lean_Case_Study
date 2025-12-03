# Playwright E2E Test Automation Framework

## Framework Overview

This is a **clean, structured Playwright test automation framework** designed for the Saucedemo website. The framework follows industry best practices and **does not use advanced features like fixtures**.

## Framework Architecture

### ✅ Key Features
- **Page Object Model (POM)** design pattern
- **No hardcoded values** - all data externalized
- **No advanced fixtures** - simple, straightforward approach
- **Centralized configuration** - constants and locators in one place
- **Test data management** - JSON-based test data
- **Reusable page objects** - clean separation of concerns
- **Clear test structure** - easy to understand and maintain

### 📁 Framework Structure

```
Lean_Case_Study/
│
├── tests/                         # E2E test files
│   └── e2e-purchase-flow.spec.js  # Complete E2E purchase flow test
│
├── pages/                         # Page Object Model classes
│   ├── LoginPage.js               # Login page interactions
│   ├── InventoryPage.js           # Product listing page
│   ├── CartPage.js                # Shopping cart page
│   ├── CheckoutPage.js            # Checkout information page
│   ├── CheckoutOverviewPage.js    # Order summary page
│   └── CheckoutCompletePage.js    # Order confirmation page
│
├── utils/                         # Utility classes and helpers
│   ├── constants.js               # All locators, URLs, messages
│   └── testDataHelper.js          # Test data loader
│
├── test-data/                     # Test data files
│   └── test-data.json             # Credentials and customer info
│
├── screenshots/                   # Test screenshots
│   └── order-confirmation.png     # Auto-generated screenshots
│
├── playwright-report/             # HTML test reports
│   └── index.html                 # Test execution report
│
├── test-results/                  # Test execution results
│   └── results.json               # JSON test results
│
├── playwright.config.js           # Playwright configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Install Playwright browsers:**
```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

### Run tests in debug mode:
```bash
npm run test:debug
```

### Run E2E test specifically:
```bash
npm run test:e2e
```

### Run tests in specific browser:
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### View test report:
```bash
npm run test:report
```

### Clean test artifacts:
```bash
npm run test:clean
```

## 📋 Test Scenarios

### E2E Purchase Flow Test
**File:** `tests/e2e-purchase-flow.spec.js`

**Test Case:** User can buy 3 random products successfully

**Steps:**
1. Navigate to Saucedemo website
2. Login with valid credentials
3. Add 3 random products to cart
4. Navigate to shopping cart
5. Verify cart contains 3 items
6. Proceed to checkout
7. Fill checkout information
8. Complete the order
9. Verify order success message
10. Take screenshot of confirmation

**Validations:**
✓ Cart contains exactly 3 items
✓ Success header displays: "Thank you for your order!"
✓ Success message displays: "Your order has been dispatched..."
✓ Screenshot captured of order confirmation

## 🏗️ Framework Design Principles

### 1. No Hardcoded Values
- All URLs in `utils/constants.js`
- All locators in `utils/constants.js`
- All test data in `test-data/test-data.json`
- All messages in `utils/constants.js`

### 2. No Advanced Fixtures
- Simple page object initialization
- Direct instantiation of classes
- No custom fixtures or complex setup
- Straightforward test structure

### 3. Page Object Model
Each page has its own class with methods:
- **LoginPage:** Handle login operations
- **InventoryPage:** Handle product selection
- **CartPage:** Handle cart operations
- **CheckoutPage:** Handle checkout form
- **CheckoutOverviewPage:** Handle order review
- **CheckoutCompletePage:** Handle confirmation

### 4. Clear Separation of Concerns
- **pages/:** User interactions
- **utils/:** Helper functions and data
- **test-data/:** External test data
- **tests/:** Test scenarios and assertions

## 📊 Test Data Management

Test data is stored in `test-data/test-data.json`:

```json
{
  "credentials": {
    "validUser": {
      "username": "standard_user",
      "password": "secret_sauce"
    }
  },
  "customerInfo": {
    "validCustomer": {
      "firstName": "Altaf",
      "lastName": "Shaikh",
      "postalCode": "400088"
    }
  }
}
```

Access test data using `TestDataHelper`:
```javascript
const testDataHelper = new TestDataHelper();
const credentials = testDataHelper.getValidUserCredentials();
```

## 🎯 Locator Management

All locators are centralized in `utils/constants.js`:

```javascript
LOCATORS: {
  LOGIN: {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: 'input[name="login-button"]'
  }
}
```

## 📸 Screenshots

Screenshots are automatically captured:
- On test failure (automatic)
- On order confirmation (explicit)
- Saved to `screenshots/` directory

## 📈 Reporting

After test execution, reports are available:
- **HTML Report:** `playwright-report/index.html`
- **JSON Report:** `test-results/results.json`
- **Console Output:** Real-time test progress

## 🔧 Configuration

Framework configuration in `playwright.config.js`:
- Test directory: `./tests`
- Test pattern: `**/*.spec.js`
- Base URL: `https://www.saucedemo.com/`
- Browsers: Chromium, Firefox, WebKit
- Parallel execution: Enabled
- Screenshots: On failure

## 📝 Test Execution Flow

```
1. Initialize test data and page objects (no fixtures)
2. Navigate to application
3. Perform login
4. Add products to cart
5. Navigate through checkout
6. Verify order completion
7. Capture screenshot
8. Generate report
```

## ✅ Best Practices Followed

1. ✓ Page Object Model implementation
2. ✓ No hardcoded values
3. ✓ No advanced fixtures
4. ✓ Externalized test data
5. ✓ Centralized locators
6. ✓ Clear and descriptive method names
7. ✓ Proper assertions and validations
8. ✓ Comprehensive logging
9. ✓ Screenshot capture
10. ✓ Clean code structure
11. ✓ Proper naming conventions (kebab-case for files/folders)

## 🤝 Contributing

When adding new tests:
1. Create page objects for new pages in `pages/`
2. Add locators to `utils/constants.js`
3. Add test data to `test-data/test-data.json`
4. Create test files with `.spec.js` suffix in `tests/`
5. Follow existing naming conventions
6. Add proper documentation

## 📞 Support

For issues or questions, please refer to:
- Playwright Documentation: https://playwright.dev
- Project Issues: Contact the team

## 🎓 Learning Resources

- **Playwright Docs:** https://playwright.dev/docs/intro
- **Page Object Model:** https://playwright.dev/docs/pom
- **Best Practices:** https://playwright.dev/docs/best-practices

---

**Author:** Altaf Shaikh  
**Framework Version:** 1.0.0  
**Last Updated:** December 2024

