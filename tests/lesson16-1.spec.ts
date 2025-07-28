import {expect, Locator, test} from "@playwright/test";
import {faker} from "@faker-js/faker/locale/en";


const {APP_URL, USER} = process.env;
test.beforeEach(async ({ page }) => {
    if (!APP_URL) {
        throw new Error('APP_URL is not defined!');
    }
    await page.goto('/');
})

test('sign in button is disabled', async ({ page }) => {
    const loginButton: Locator = page.getByRole('button', { name: 'Sign in' });
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    const randomUsername = faker.internet.username() // using faker to generate a random username
    const randomShortPassword = faker.internet.password({ length: 4 }); // using faker to generate a random 4-character password
    await userName.fill(randomUsername);
    await password.fill(randomShortPassword);
    await expect(loginButton).toBeDisabled();
});

test('appearance of modal window incorrect credentials when password is incorrect and testing the color of the lettering', async ({ page }) => {
    const loginButton: Locator = page.getByRole('button', { name: 'Sign in' });
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    const randomPassword = faker.internet.password({ length: 10});
    const modalWindow: Locator = page.locator('.error-popup__title');
    if (!process.env.USER) {
        throw new Error('USER is not defined in environment variables');
    }
    await userName.fill(process.env.USER);
    await password.fill(randomPassword);
    await loginButton.click();
    await expect(modalWindow).toBeVisible();
    await expect(modalWindow).toHaveText('Incorrect credentials');
    const color = await modalWindow.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgb(234, 90, 90)');
});