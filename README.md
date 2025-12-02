# Playwright E2E Testing Project - Saucedemo

## 📋 Project Overview
This project contains automated end-to-end tests for the Saucedemo e-commerce website using Playwright Test framework. The test automates the complete user journey from login to order completion.

---

## 🎯 Test Scenario
**Test Name:** User can buy 3 random products successfully

### Test Steps:
1. **Navigation** - Navigate to https://www.saucedemo.com/
2. **Login** - Authenticate with valid credentials
3. **Product Selection** - Randomly select 3 products from the inventory
4. **Add to Cart** - Add selected products to the shopping cart
5. **Cart Verification** - Verify that 3 items are in the cart
6. **Checkout Process** - Complete the checkout form with user details
7. **Order Completion** - Finish the purchase
8. **Verification** - Assert successful order completion message

### Test Credentials:
- **Username:** `standard_user`
- **Password:** `secret_sauce`

### Customer Information:
- **First Name:** Altaf
- **Last Name:** Shaikh
- **Zip Code:** 400088

---

## 🛠️ Tech Stack
- **Node.js** - JavaScript runtime
- **Playwright** - E2E testing framework (v1.57.0)
- **@playwright/test** - Playwright test runner

---

## 📁 Project Structure
```
Lean_Case_Study/
├── Test/
│   └── test.js                 # Main test file
├── playwright-report/          # HTML report output directory
│   └── index.html             # Generated HTML report
├── test-results/              # Test execution artifacts
├── playwright.config.js       # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

---

## ⚙️ Configuration Details

### Playwright Configuration (`playwright.config.js`)
- **Test Directory:** `./Test`
- **Test Match Pattern:** `**/*.js`
- **Browser:** Chromium (Desktop Chrome)
- **Parallel Execution:** Enabled
- **Retries:** 0 (no retries)
- **Base URL:** https://www.saucedemo.com/
- **Reporters:** 
  - HTML Report (output: `playwright-report/`)
  - List (console output)
- **Trace:** On first retry
- **Screenshot:** Only on failure

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd Path/To/Lean_Case_Study
   ```

2. **Install dependencies:**
   ```bash
   npm install Playwright
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install chromium
   ```

---

## 🧪 Running Tests

### Run all tests (Headless mode)
```bash
npm test
```
This runs tests in headless mode (no browser UI visible) and generates an HTML report.

### Run tests in headed mode (Browser visible)
```bash
npm run test:headed
```
This opens the browser so you can see the test execution in real-time.

### Run specific test file
```bash
npx playwright test Test/test.js
```

### Run tests in debug mode
```bash
npx playwright test --debug
```
Opens Playwright Inspector for step-by-step debugging.

### Run tests with specific browser
```bash
npx playwright test --project=chromium
```

---

## 📊 Viewing Test Reports

### Open HTML Report
After running tests, open the interactive HTML report:

```bash
npm run test:report
```
or
```bash
npx playwright show-report
```

This will:
- Start a local server at `http://localhost:9323`
- Open the report in your default browser
- Display detailed test results, traces, and screenshots

### Report Features:
- ✅ Pass/Fail status for each test
- ⏱️ Execution time and performance metrics
- 📸 Screenshots (captured on failure)
- 📹 Video recordings (if enabled)
- 🔍 Detailed step-by-step logs
- 🐛 Error stack traces (on failures)

---

## 📝 Test Details

### File: `Test/test.js`

#### Test Flow:
```javascript
1. Navigate to Saucedemo website
2. Login with credentials
3. Get all product "Add to Cart" buttons
4. Generate 3 random unique indexes
5. Click "Add to Cart" for 3 random products
6. Navigate to Shopping Cart
7. Assert 3 items are in the cart
8. Click Checkout
9. Fill in customer information (First Name, Last Name, Zip Code)
10. Click Continue
11. Click Finish
12. Verify success message: "Thank you for your order!"
```

#### Key Assertions:
- Cart contains exactly 3 items
- Success message displays "Thank you for your order!"

#### Locators Used:
- `#user-name` - Username input field
- `#password` - Password input field
- `input[name="login-button"]` - Login button
- `.inventory_item button` - All "Add to Cart" buttons
- `a.shopping_cart_link` - Shopping cart link
- `.cart_item` - Cart items
- `#checkout` - Checkout button
- `.complete-header` - Order completion header

---

## 🔧 Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run tests with browser UI visible |
| `npm run test:report` | Open the HTML test report |

---

## 📦 Dependencies

### Production Dependencies:
- `playwright` (v1.57.0)

### Development Dependencies:
- `@playwright/test` (latest)

---

## 🎨 Test Features

### Random Product Selection
The test implements a smart random selection algorithm:
- Ensures 3 unique products are selected
- No duplicate selections
- Works regardless of total product count

### Robust Selectors
- Uses reliable CSS selectors and Playwright locators
- Implements modern Playwright APIs (`getByPlaceholder`, `locator`)
- Ensures stable test execution

### Comprehensive Assertions
- Verifies cart count before checkout
- Validates successful order completion
- Uses Playwright's built-in assertion library

---

## 🐛 Debugging Tips

### If tests fail:
1. **Run in headed mode** to see what's happening:
   ```bash
   npm run test:headed
   ```

2. **Use debug mode** for step-by-step execution:
   ```bash
   npx playwright test --debug
   ```

3. **Check screenshots** in `test-results/` folder

4. **View traces** in the HTML report

5. **Enable video recording** in `playwright.config.js`:
   ```javascript
   use: {
     video: 'on',
   }
   ```

---

## 📈 Test Results

### Latest Test Execution:
- ✅ **Status:** PASSED
- ⏱️ **Duration:** ~3.2 seconds
- 🌐 **Browser:** Chromium
- 📅 **Last Run:** December 2, 2025

---

## 📞 Support & Contribution

### Author
- **Name:** Altaf Shaikh
- **Project:** Lean_Case_Study

### Reporting Issues
If you encounter any issues:
1. Check the HTML report for detailed error logs
2. Review screenshots in `test-results/` folder
3. Verify browser is installed: `npx playwright install chromium`

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Saucedemo Website](https://www.saucedemo.com/)

---

## ✅ Quick Start Checklist

- [ ] Install Node.js
- [ ] Clone/Download project
- [ ] Run `npm install`
- [ ] Run `npm install Playwright`
- [ ] Run `npx playwright install chromium`
- [ ] Run `npm test`
- [ ] View report with `npm run test:report`

---

## 🔐 Security Note
**Important:** The test credentials used in this project are for the public Saucedemo test website only. Never commit real credentials to version control.

---

## 📄 License
This project is for educational and testing purposes.

---

**Happy Testing! 🚀**

