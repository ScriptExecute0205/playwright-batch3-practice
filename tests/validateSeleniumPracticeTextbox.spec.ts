import { test, expect } from '@playwright/test';

test('Validate the Selenium Practice Textbox', async ({ page }) => {
    //Navigate to URL
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    //Validate all fields present on the form
    //Validate the FUll Name field
    const fullname = page.getByPlaceholder("Full Name");
    await expect(fullname).toBeVisible();
    await expect(fullname).toBeEnabled();
    await expect(fullname).toBeEditable();

    //Validate Email field
    const emailField = page.getByPlaceholder('name@example.com');
    await expect(emailField).toBeVisible();
    await expect(emailField).toBeEnabled();
    await expect(emailField).toBeEditable();

    //Validate Current Address Field
    const CurrentAddresssField = page.getByPlaceholder('Currend Address');
    await expect(CurrentAddresssField).toBeVisible();
    await expect(CurrentAddresssField).toBeEnabled();
    await expect(CurrentAddresssField).toBeEditable();

    //Validate the Password field
    const passwordField = page.getByPlaceholder('Password');
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();
    await expect(passwordField).toBeEditable();

    //Validate the Submit button
    const submitButton = page.locator('.btn.btn-primary');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
});

test('Validae the required filed validation', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    //click on Submit button
    const submitButton = page.locator('.btn.btn-primary');
    await submitButton.click();

    //Validate the Full name field error
    const fullname = page.getByPlaceholder('Full Name');
    await expect(fullname).toHaveClass(/error/);

    //Validate the email filed error
    const emailField = page.getByPlaceholder('name@example.com');
    await expect(emailField).toHaveClass(/error/);

    //Validate Current address filed eroor
    const currentAddressField = page.getByPlaceholder('Currend Address');
    await expect(currentAddressField).toHaveClass(/error/);

    //Validate Password field error
    const passwordField = page.getByPlaceholder('Password');
    await expect(passwordField).toHaveClass(/error/);
});

test('Validate attribute using toHaveClass() method', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    //Enter the value in Fullname text field
    const fullName = page.getByPlaceholder('Full Name');
    await fullName.fill('Script');
    await fullName.blur();
    await expect(fullName).toHaveClass(/valid/);

    //Enter the email id
    const emailField = page.getByPlaceholder('name@example.com');
    await emailField.fill('test@abc.com');
    await emailField.blur();
    await expect(emailField).toHaveClass(/valid/);

    //Enter the Current address 
    const currentAddress = page.getByPlaceholder('Currend Address');
    await currentAddress.fill('India 00000000000001');
    await currentAddress.blur();
    await expect(currentAddress).toHaveClass(/valid/);

    //Enter the Password
    const passwordField = page.getByPlaceholder('Password');
    await passwordField.fill('12345');
    await passwordField.blur();
    await expect(passwordField).toHaveClass(/valid/);

    //Click on Submit button
    const submitButton = page.locator('.btn.btn-primary');
    await submitButton.click();
});

test('Validate the attributes using toHaveAttribute() method', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    const submitButton = page.locator('.btn.btn-primary');
    await submitButton.click();

    const fullName = page.getByPlaceholder('Full Name');
    //Validate the attribute value before entering the text
    await fullName.fill('S');
    await fullName.blur();
    await expect(fullName).toHaveAttribute('aria-invalid', 'true');

    //Validate the attribute value after entering the text
    await fullName.fill('Script');
    await fullName.blur();
    await expect(fullName).toHaveAttribute('aria-invalid', 'false');
});

test('Validate the attribute using toBeAttached()', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    const submitButton = page.locator('.btn.btn-primary');
    await submitButton.click();

    //Validate the Error attached to FullName field
    //getByLabel() to be used when label tag used
    /* const fullNameErrorField = page.getByLabel('This field is required.');
    await expect(fullNameErrorField).toBeAttached();
     */

    const fullNameErrorField = page.locator('#fullname-error');
    await expect(fullNameErrorField).toBeAttached();
    
    //Validate the Error attached to Email field
    const emailErrorField = page.locator('#email-error');
    await expect(emailErrorField).toBeAttached();

    //Validate the error attached to Current Address field
    const currentAddressError = page.locator('#address-error');
    await expect(currentAddressError).toBeAttached();

    //Validate the error attached to Password filed
    const passwordErrorField = page.locator('#password-error');
    await expect(passwordErrorField).toBeAttached();
});

