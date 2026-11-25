import { test, expect } from '@playwright/test';

test('Validate Login Page Title, Username, Password fields, login button', async ({ page }) => {
    //Navigate to URL
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Validate the page title
    await expect(page).toHaveTitle('OrangeHRM');

    //Validate the comapny logo
    const companyLogo = page.getByAltText('company-branding');
    await expect(companyLogo).toBeVisible();

    //Validate the username field
    const usernameField = page.getByPlaceholder("Username");
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEnabled();
    await expect(usernameField).toBeEditable();

    //Validate Password field
    const passwordField = page.getByPlaceholder('Password');
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();
    await expect(passwordField).toBeEditable();

    //Validate Login Button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
});

test('Validate Forgot password Link', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const forgotPasswordLink = page.getByText('Forgot your password?');
    await expect(forgotPasswordLink).toBeVisible();
    await expect(forgotPasswordLink).toBeEnabled();

    //Validate the Login Text
    const loginText = page.locator('h5');
    await expect(loginText).toHaveText('Login');

    //Fetch the text using textContent()
    const text = await loginText.textContent();
    console.log('Fetched text is: ', text);
    expect(text?.trim()).toBe("Login");
    expect(text?.trim()).toContain("Login");

    //? - optional chaining -  allow to access the value

    //Validate the OrangeHRM OS text
    const copyRightText = page.getByText("OrangeHRM OS 5.9");
    await expect(copyRightText).toContainText('OrangeHRM');

    //const text1 = await copyRightText.textContent();
    const copyRightText1 = await page.getByText("OrangeHRM OS 5.9").textContent();
    console.log(copyRightText1);
    expect(copyRightText1).toContain('OrangeHRM OS');

    //Validate Copyright Link
    const copyRightLink = page.getByRole('link', { name: 'OrangeHRM, Inc' });
    await expect(copyRightLink).toBeEnabled();
    await expect(copyRightLink).toBeVisible();
});

test('Validate Social Media Links', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Validate the social media links
    const linkedInLink = page.locator("a[href*='linkedin']");
    await expect(linkedInLink).toBeVisible();

    const twitterLink = page.locator("a[href*='twitter']");
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toBeEnabled();

    const facebookLink = page.locator("a[href*='facebook']");
    await expect(facebookLink).toBeVisible();

    const youtubeLink = page.locator("a[href*='youtube']");
    await expect(youtubeLink).toBeVisible();
});

test('Validate using attributes', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    const loginButton= page.getByRole('button',{name:'Login'});
    await loginButton.click();

    //Validate the usename field highlighted as required field with red color
    const usernameErrorField= page.locator("input.oxd-input--error[name='username']");
    await usernameErrorField.isVisible();

    //Validate the password field hightlighted as required field with red color
    const passwordErrorField= page.locator("input.oxd-input--error[name='password']");
    await passwordErrorField.isVisible(); 
});