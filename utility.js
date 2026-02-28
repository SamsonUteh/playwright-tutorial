export async function login(page, username) {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
}