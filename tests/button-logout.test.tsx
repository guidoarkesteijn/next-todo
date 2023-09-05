import { test, expect } from '@playwright/test'
 
test('should navigate to the login page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Login')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/login')
  // The new page should contain an h1 with "About Page"
  await expect(page.getByRole('navigation').locator('div').filter({ hasText: /^My Website$/ })).toContainText('My Website')
})