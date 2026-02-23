import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.tracing.start({ screenshots: true, snapshots: true });
    page = await context.newPage();
});

test.afterAll(async () => {
    await context.tracing.stop({ path: 'file-level-trace.zip' });
});

test('First', async ({}) => {
    await context.tracing.start({ screenshots: true, snapshots: true });

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google1/)
    
    await context.tracing.stop({ path: 'trace.zip' });

});

test('Second', async ({}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google2/)

})