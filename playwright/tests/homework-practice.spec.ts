import { test, expect } from "@playwright/test";

test.describe("Test Practice Automation  HTML Form", () => {
  test.beforeEach('Go To HTML Home Page Test Practice', async({page}) => {
     
     await page.goto("https://practicetestautomation.com/practice-test-login/");
  });

test("Positive LogIn test", async ({ page }) => {    
         
    //Type username student into Username field
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("student");
    await expect(usernameInput).toHaveValue("student");

    //Type password Password123 into Password field
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("Password123");
    await expect(passwordInput).toHaveValue("Password123");
    
    //Push Submit button
    const submitButton = page.locator('xpath=//button[@id="submit"]');
    
    await expect(submitButton).toBeVisible();
    await submitButton.click();
 
    //Verify that the URL contains 'logged-in-successfully'
    await expect(page).toHaveURL(/.*logged-in-successfully/);
    
    //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    const successMessage = page.locator('text=Congratulations') || page.locator('text=successfully logged in') ;
    await expect(successMessage).toBeVisible();

    // Verify button Log out is displayed on the new page
    const logoutButton = page.locator('xpath=//a[text()="Log out"]');
    await expect(logoutButton).toBeVisible();

  });

  test("Negative username test", async ({ page }) => {    
         
    //Type incorrect username into Username field
    const usernameInput2 = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput2).toBeVisible();
    await usernameInput2.fill("incorrectUser");
    await expect(usernameInput2).toHaveValue("incorrectUser");

    //Type password Password123 into Password field
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("Password123");
    await expect(passwordInput).toHaveValue("Password123");
    
    //Push Submit button
    const submitButton = page.locator('xpath=//button[@id="submit"]');
    
    await expect(submitButton).toBeVisible();
    await submitButton.click();
 
    // Wait for the error message to appear
    const errorMsg = page.locator('xpath=//div[@id="error"]');
       
    // Ensure that the error message is visible
    await expect(errorMsg).toBeVisible();

    // Verify that the error message text is 'Your username is invalid!'
    await expect(errorMsg).toHaveText('Your username is invalid!');

  });

  test("Negative password test", async ({ page }) => {    
         
    //Type username student into Username field
    const usernameInput3 = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput3).toBeVisible();
    await usernameInput3.fill("student");
    await expect(usernameInput3).toHaveValue("student");

    //Type password incorrectPassword into Password field
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("incorrectPassword");
    await expect(passwordInput).toHaveValue("incorrectPassword");
    
    //Push Submit button
    const submitButton = page.locator('xpath=//button[@id="submit"]');
    
    await expect(submitButton).toBeVisible();
    await submitButton.click();
 
    // Wait for the error message to appear
    const errorMsg = page.locator('xpath=//div[@id="error"]');
       
    // Ensure that the error message is visible
    await expect(errorMsg).toBeVisible();

    // Verify that the error message text is 'Your password is invalid!'
    await expect(errorMsg).toHaveText('Your password is invalid!');

  });

});