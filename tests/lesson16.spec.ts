import {expect, Locator, test} from "@playwright/test";


test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath = `file://${path.resolve('src/order.html')}`;
    await page.goto(filePath);
})

test('button disabled initially', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    await expect(orderButton).toBeDisabled();
});

test('button enabled after filling correct data', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const eMail: Locator = page.getByTestId('email');
    await userName.fill('test');
    await eMail.fill('test@test.abc');
    await expect(orderButton).toBeEnabled();
});

test('popup is visible', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const eMail: Locator = page.getByTestId('email');
    const popupMessage: Locator = page.locator('#popup-message');
    await userName.fill('test');
    await eMail.fill('test@test.abc');
    await orderButton.click()
    await expect(popupMessage).toBeVisible();
    await expect(popupMessage).toHaveText('OK');
});

test('button is disabled when email is incorrect', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const eMail: Locator = page.getByTestId('email');
    await userName.fill('test');
    await eMail.fill('test@test');
    await expect(orderButton).toBeDisabled();
});