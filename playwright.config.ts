import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests', // Directory where your test files are located
timeout: 30000,
retries: 2,
use: {
	browserName: 'firefox',
    channel: 'firefox', // Use Chrome
	headless: false, // Run tests in headful mode/Set to true if you want to run tests in headless mode
	viewport: { width: 1280, height: 720 },
	ignoreHTTPSErrors: true,
},
});