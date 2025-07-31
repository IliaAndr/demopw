# Demo Playwright Project

## Description

This project contains Playwright tests for:

- Signing in
- Placing an order by filling in username and email fields

## Installation

1. Clone the repository.
2. Install dependencies:
   `npm install`  
3. Install Faker.js library:
   `npm install @faker-js/faker`
4. Load Environment Variables
   If you're using TypeScript/JavaScript, install dotenv (if it's not already installed):
   `npm install dotenv`  

Then, at the top of your ***playwright.config.ts***, add:  

   import dotenv from 'dotenv';  
   import path from 'path';  
   dotenv.config({ path: path.resolve(__dirname, '.env') });  

## Environment Configuration

1. Create a `.env` file and provide actual values for all required variables e.g.:  

   APP_URL=https://your-actual-app-url.com  

🔴 **Important:** Add .env to .gitignore to avoid committing sensitive data!

## Running Tests

1. Run all tests:
   `npx playwright test`  

2. Run a specific test file:
   `npx playwright test tests/example.spec.ts`  

3. Launch Playwright UI mode:
   `npx playwright test --ui`  

4. Run all tests on Chromium:
   `npx playwright test --project=chromium`  

5. Run a specific test file on Chromium in debug mode:
   `npx playwright test tests/example.spec.ts --project=chromium --debug`


