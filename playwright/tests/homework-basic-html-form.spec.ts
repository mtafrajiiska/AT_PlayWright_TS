import { test, expect } from "@playwright/test";

test.describe("Basic HTML Tests", () => {

//Add a beforeEach hook to avoid repeating page.goto() in every test.

test.beforeEach('Go To HTML Form Page', async({page}) => {
    const htmlFormUrl = process.env.BASE_HTML_FORM_URL as string;    
    await page.goto(htmlFormUrl);
});

 
test("Has h1 title", async ({ page }) => {

  const title = page.locator("xpath=//h1");
  await expect(title).toHaveText("Basic HTML Form Example");
});

test("Test username field", async ({ page }) => {
  
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");
});


//Locate the Password field, fill it with a test value, and validate the input.
test("Test password field", async ({ page }) => {  
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPass");
    await expect(passwordInput).toHaveValue("testPass");
  });

// Locate the TextArea field, fill it with a test value, and validate the input.
test("Test TextArea field", async ({ page }) => {  
    const textAreaInput = page.locator("xpath=//textarea[@name='comments']");
    //await expect(textAreaInput).toBeVisible();
    await textAreaInput.fill("TextArea");
    await expect(textAreaInput).toHaveValue("TextArea");
  });

test("Test Checkbox selection", async ({ page }) => {
 
  const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();
});

// After the checkbox test, add a similar test for Radio Items.

test("Test Radio Items selection", async ({ page }) => { 
    const radioEl = page.locator('xpath=//input[@value="rd2"]');
    await expect(radioEl).toBeVisible();
    await radioEl.check();
    await expect(radioEl).toBeChecked();
  });

test("Select dropdown option", async ({ page }) => {
  
  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");
});

// Finally, submit the form by locating the input with type="submit" and triggering a click action.

test("Submit the form", async ({ page }) => {
    
// Fill out the form
const usernameInput = page.locator("xpath=//input[@name='username']");
const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
const radioEl = page.locator('xpath=//input[@value="rd2"]');
const dropdown = page.locator('xpath=//select[@name="dropdown"]');

await usernameInput.fill("testUser");
await checkboxEl.check();
await radioEl.check();
await dropdown.selectOption("dd2");

// Locate the submit button and click it
const submitButton = page.locator('xpath=//input[@type="submit"]');
await expect(submitButton).toBeVisible();
await submitButton.click();

const successMessage = page.locator("xpath=//div[contains(text(), 'Form submitted successfully')]");
//await expect(successMessage).toBeVisible();
});

});