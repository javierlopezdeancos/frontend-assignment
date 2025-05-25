import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByRole('heading', { name: 'shows' })).toBeVisible();
});

test('click into a show card link should go to show details page', async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.locator('#shows-list-1').first().click()
  await expect(page.getByRole('heading', { name: 'show' })).toBeVisible();
});
