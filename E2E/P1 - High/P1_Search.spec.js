import { test, expect } from '@playwright/test';

const base_url = 'https://commute.my/'

test('Validate the URL Redirection', async ({ page }) => {
  const expectedURL ='https://commute.my/'

  await page.goto(base_url);
  const currentURL = page.url();
    
  if (base_url !== expectedURL) {
    console.log(`URL mismatch. Expected: ${expectedURL}, but got: ${base_url}`);
  }

  await expect (page).toHaveURL(base_url);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Commute/);
});

test ('Verify The Searchbar Is Present', async ({ page }) => {
  await page.goto(base_url);
  await page.waitForLoadState();

  const input = page.locator('input[placeholder="Origin"]');

  await expect(input).toBeVisible();
  await expect(input).toHaveAttribute('placeholder','Origin');

  if (await input.isDisabled()) {
    console.warn('The Origin input is currently disabled.');
  } else {
    await input.click();
    console.log('Origin input was clickable.');
  }

  });

test ('Verify The Functionality Searchbar Is Present', async ({ page }) => {
  await page.goto(base_url);
  await page.waitForLoadState();
  
  const input = page.locator('input[placeholder="Origin"]');
  
  await expect(input).toBeVisible();
  await expect(input).toHaveAttribute('placeholder','Origin');
  
  if (await input.isDisabled()) {
    console.warn('The Origin input is currently disabled.');
  } else {
    await input.click();
    console.log('Origin input was clickable.');
  }
  
});

