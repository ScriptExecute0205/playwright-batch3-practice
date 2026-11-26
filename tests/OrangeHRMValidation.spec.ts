import {test,expect} from "@playwright/test"

test("validate Username field in OrangeHRM", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
    const Username = page.getByPlaceholder("Username");
    await expect(Username).toBeVisible();
    await expect(Username).toBeEnabled();
    await expect(Username).toBeEditable();
    await Username.fill("standard_user");
});

test("validate Password field in OrangeHRM", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
    const Password = page.getByPlaceholder("Password");
    await expect(Password).toBeVisible();
    await expect(Password).toBeEnabled();
    await expect(Password).toBeEditable();
    await Password.clear();
    await Password.fill("secret_sauce");
});

test("validate login button in orangeHRM page", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const loginbutton = page.getByRole('button',{name :'Login'});
    await expect(loginbutton).toBeVisible();
    await expect(loginbutton).toBeEnabled();
});

test("validate forget your password", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const forgotPasswordLink = page.getByText("Forgot your password? ");
    await expect(forgotPasswordLink).toBeVisible();
    await expect(forgotPasswordLink).toBeEnabled();
});



test ("Validating logo - OrangeHRM",async({page}) =>
{

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const loginTitle = await page.locator("h5");
    //using toHaveText();
    expect (loginTitle).toHaveText("Login");

    //fetch the text - text content
    const text = await loginTitle.textContent();
    console.log("The text fetched is :", text);
    await expect(text?.trim()).toBe("Login");
    await expect(text?.trim()).toContain("Login");


});

test("validate linkedin symbol in orangeHRM page", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const linkedIN = page.locator("a[href* = linkedin.com']");
    await expect(linkedIN).toBeVisible();
    await expect(linkedIN).toBeEnabled();
});

test("validate facebook symbol in orangeHRM page", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const loginbutton = page.locator("a[href* = facebook.com']");
    await expect(loginbutton).toBeVisible();
    await expect(loginbutton).toBeEnabled();
});

test("validate OrangeHRMlink - orangeHRM page", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Validating OrangeHRM with getByRole
    const orangeHRM = page.getByRole('link',{ name : "OrangeHRM, Inc" });
    await expect(orangeHRM).toBeVisible();
    await expect(orangeHRM).toBeEnabled();
});
test("validate Username,password title - orangeHRM page", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Validating OrangeHRM with getByRole
    const UserName = page.getByText("Username : Admin");

    await expect(UserName).toBeVisible();

    //validating with get text
    const Usernametext= await UserName.textContent();
    await expect(Usernametext).toBe("Username : Admin");
    
});