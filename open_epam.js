import { test, expect } from '@playwright/test';

test('Navigate to EPAM, select Services, explore Client Work, and verify text', async ({ page }) => {
  // Step 1: Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Step 3: Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();

  // Close the browser
  await page.close();
});
