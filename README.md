# Cypress Test Framework

This project is a Cypress end-to-end automation framework built with the Page Object Model (POM) pattern.

The current implementation is set up against the BrowserStack demo application:

- Base URL: `https://bstackdemo.com`
- Current covered flow: sign in
- Reporter: `mochawesome`

## Framework Highlights

- POM-based structure for reusable page methods
- Externalized test data using fixtures
- Shared Cypress support setup
- Mochawesome HTML and JSON reporting
- Custom Cypress launcher to handle the local `ELECTRON_RUN_AS_NODE` environment issue

## Project Structure

```text
cypress-project/
|-- e2e/
|   |-- signin.cy.js
|-- fixtures/
|   |-- users.json
|-- pages/
|   |-- BasePage.js
|   |-- SignInPage.js
|-- reports/
|   |-- mochawesome/
|-- scripts/
|   |-- cypress-cli.js
|-- support/
|   |-- e2e.js
|-- cypress.config.js
|-- package.json
|-- README.md
```

## Tech Stack

- Cypress `15.12.0`
- Mochawesome `7.1.4`
- CommonJS project setup

## Setup

Install dependencies:

```bash
npm install
```

Verify Cypress:

```bash
npm run cypress:verify
```

## Available Commands

Open Cypress UI:

```bash
npm run cypress:open
```

Run all tests:

```bash
npm run cypress:run
```

Run tests in Chrome:

```bash
npm run cypress:run:chrome
```

Run tests and generate report:

```bash
npm run cypress:run:report
```

## Reporting

Mochawesome reports are generated inside:

```text
reports/mochawesome
```

Generated artifacts include:

- HTML report
- JSON report

Example report file:

- `reports/mochawesome/mochawesome_<timestamp>.html`

## Configuration

Framework configuration is managed in `cypress.config.js`.

Current key settings:

- `baseUrl`: `https://bstackdemo.com`
- `specPattern`: `e2e/**/*.cy.{js,jsx,ts,tsx}`
- `reporter`: `mochawesome`
- screenshots, videos, and downloads configured

## Page Object Model

### `BasePage.js`

Contains common reusable page actions such as:

- `visit()`
- `getBySelector()`
- `click()`
- `type()`

### `SignInPage.js`

Contains sign-in page locators and methods such as:

- `visit()`
- `openUsernameDropdown()`
- `chooseUsername()`
- `openPasswordDropdown()`
- `choosePassword()`
- `clickLogin()`
- `login()`
- `verifyLoggedInUser()`

## Test Data

Fixture data is stored in:

```text
fixtures/users.json
```

Current demo credentials are stored there for test execution.

For real-world projects, sensitive credentials should be moved to environment variables or a secure secrets manager.

## Runtime Note

This project includes a custom launcher:

```text
scripts/cypress-cli.js
```

It clears the `ELECTRON_RUN_AS_NODE` environment variable before starting Cypress. This avoids a local runtime issue where Cypress can fail to launch correctly.

Because of that, use the npm scripts in `package.json` instead of calling Cypress directly when working in this environment.

## Current Coverage

Currently implemented:

- Successful sign-in flow using POM

Suggested next additions:

- Negative login scenarios
- Product page object
- Cart page object
- Logout flow
- Custom Cypress commands for shared actions

## GitHub

This framework is connected to:

- `https://github.com/uditcasmic/cypress_test.git`

## Author

Udit
