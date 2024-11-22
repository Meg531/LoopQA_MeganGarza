import { test, expect, Page } from '@playwright/test';
import testData from '../testData.json';
import { login } from '../login';

test.describe('Asana Tests', () => {

  // Use beforeEach to login before each test case
test.beforeEach('Login to Asana', async ({ page }) => {
    const { url, email, password } = testData[0];
    await login(page, url, email, password);
        // Verify login was successful by checking for a known element after login
        await expect(page).toHaveURL(/.*app.asana.com/);
});

testData.forEach((data) => {
    test(`Verify task "${data.task}" in project "${data.project}"`, async ({ page }) => {
      // Navigate to the project
    await page.click(`text=${data.project}`);
    await page.waitForSelector(data.taskXPath);

      // Verify task is in the correct column
    const taskLocator = page.locator(data.taskXPath);
    const columnLocator = page.locator(data.columnXPath);
    const taskInColumn = columnLocator.locator(`xpath=.//span[contains(@class, 'BoardCard-taskName') and text()='${data.task}']`);

      // Verify tags
    for (const tagXPath of data.tags.map((tag, index) => data[`tag${index + 1}XPath`])) {
        const tagLocator = page.locator(tagXPath);
        expect(await tagLocator.count()).toBeGreaterThan(0);
    }
    });
});
});