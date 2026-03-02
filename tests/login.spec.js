import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test.describe('Login', () => {

    test.only('test page object', async ({ page }) => {
        const loginVar = new LoginPage(page);
        await loginVar.baseUrl();
        await loginVar.username.fill('tomsmith');
        await loginVar.password.fill('SuperSecretPassword!');
        await loginVar.loginButton.click();
        await loginVar.logoutButton.click();
    });

    // test('test 2', async ({ page }) => {
    //     await page.goto('https://the-internet.herokuapp.com/login');
    //     await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    //     await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    //     await page.getByRole('button', { name: ' Login' }).click();
    //     await page.getByRole('link', { name: 'Logout' }).click();
    // });


})

