// @ts-check
import { test, expect } from '../../fixtures/index.js';
import { test as playwrightTest, expect as playwrightExpect } from '@playwright/test';

test.describe('Playwright home', () => {
  test('@title has title', async ({ homePage, page }) => {
    await homePage.goto();
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('@started get started link opens installation docs', async ({ homePage }) => {
    await homePage.goto();
    await homePage.getStartedLink.click();
    await expect(homePage.installationHeading).toBeVisible();
  });
});


playwrightTest.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await playwrightExpect(page).toHaveTitle(/Playwright/);
});

playwrightTest.only('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await playwrightExpect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});