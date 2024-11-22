Install PlayWright before running files I have provided instructions below:
Instructions to Install Playwright on VS Code and Run Your Project
Prerequisites
Ensure you have Node.js installed. You can download it from nodejs.org.
Step-by-Step Guide
Open Visual Studio Code:

Launch Visual Studio Code on your machine.
Open Your Project Folder:

Open the folder containing your project files in VS Code.
Open Integrated Terminal:

Open the integrated terminal in VS Code by selecting Terminal > New Terminal from the top menu.
Initialize a Node.js Project (if not already initialized):
npm init -y
If your project does not already have a package.json file, initialize a new Node.js project by running:
Install Playwright:
npm install @playwright/test
Install Playwright and its dependencies by running:
Install Additional Browsers (Optional):
npx playwright install
If you need to install additional browsers, you can run:
Configure Playwright (Optional):
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Set to false if you want to see the browser UI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
You can create a Playwright configuration file (playwright.config.ts) to customize your test setup. Here is an example configuration:
Create Test Files:

Ensure your test files are in the appropriate directory (e.g., tests). Your test file should look similar to this:
Run Your Tests:
npx playwright test
Run your Playwright tests by executing the following command in the terminal:
View Test Results:

After running the tests, you can view the results in the terminal. Playwright will provide a summary of the test run, including any failures.
Additional Tips
Playwright Documentation:
https://playwright.dev/docs/intro
For more detailed information and advanced configurations, refer to the Playwright documentation.
VS Code Extensions:

Consider installing the "Playwright Test for VSCode" extension for better integration and support within VS Code.
By following these steps, you should be able to set up Playwright in Visual Studio Code and run your automated tests for the Asana project. If you encounter any issues, refer to the Playwright documentation or seek help from the Playwright community.
