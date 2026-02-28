import { test, expect } from '@playwright/test';
import { login } from '../utility';


test.describe('Hooks', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // await login(page, 'standard_user');


  });

  test.afterEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });

  test('test 1', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Samson');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('U');
    await page.locator('[data-test="lastName"]').fill('Uteh');
    await page.locator('[data-test="postalCode"]').fill('123456');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
  });


  test('test 2', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
    await page.locator('div').nth(4).click();

  });

})
