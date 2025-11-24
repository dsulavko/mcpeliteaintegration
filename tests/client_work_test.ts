import { test, expect } from '@playwright/test';

test('Verify Client Work page', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).nth(1).click();

  // Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify "Client Work" text is visible on the page
  const isVisible = await page.evaluate(() => document.body.innerText.includes('Client Work'));
  expect(isVisible).toBeTruthy();
});