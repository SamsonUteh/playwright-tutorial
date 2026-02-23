import { test, expect } from '@playwright/test';

test('First for trace viewer sample', async ({page, context}) => {
    await context.tracing.start({ screenshots: true, snapshots: true });

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google1/)
    
    await context.tracing.stop({ path: 'trace.zip' });

});

test('Second for trace viewer sample', async ({page}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google/)

})