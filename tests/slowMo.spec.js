// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Slow Motion Test Level', async ({ }) => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 100,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 800, height: 600 },
    }
  });
  const page = await context.newPage();

  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);


  await context.close();
});


