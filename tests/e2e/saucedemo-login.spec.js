// @ts-check
import { test, expect } from '@playwright/test';

test('Sauce Demo login page is displayed', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveTitle('Swag Labs');
  await expect(page.getByText('Swag Labs').first()).toBeVisible();
  await expect(page.getByRole('form', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByText('Swag Labs').first()).toBeVisible();
});
