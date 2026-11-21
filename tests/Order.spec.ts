import {test, expect } from '@playwright/test';

test("Verify the title - Double Quote", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await expect(page).toHaveTitle("Swag Labs")
})

test("Verify the title - Single Quote", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await expect(page).toHaveTitle('Swag Labs')
})

test("Verify the title - Store it in Variable", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   const pageTitle = "Swag Labs";
   await expect(page).toHaveTitle(pageTitle);
})

test("Verify the title - Regular Expression", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await expect(page).toHaveTitle(/Swag/);
})
test("Verify the title - Regular Expression - case sensitive", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await expect(page).toHaveTitle(/sWaG/i);
})

test("Verify the title - Regular Expression - Get title", async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   const title = await page.title();
   console.log("The title of the page is : ", title);
 expect(title).toBe("Swag Labs")
})