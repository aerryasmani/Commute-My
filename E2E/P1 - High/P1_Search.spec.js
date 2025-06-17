import { test, expect } from '@playwright/test';

test('Correct URL', async ({ page }) => {
    await page.goto('https://commute.my/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/commute/);
  });