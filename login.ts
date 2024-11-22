import { Page } from 'playwright';

export async function login(page: Page, url: string, email: string, password: string) {
await page.goto(url);
await page.fill('input[type="email"]', email);
await page.click('.ButtonThemeablePresentation--isEnabled.ButtonThemeablePresentation--large.LoginButton.LoginEmailForm-continueButton');
await page.fill('input[name="p"]', password);
await page.click('div[role="button"].ButtonThemeablePresentation--isEnabled.ButtonThemeablePresentation--large.LoginButton.LoginPasswordForm-loginButton');
await page.waitForNavigation({ waitUntil: 'networkidle' });
}