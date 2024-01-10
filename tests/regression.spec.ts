import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/HomePage/HomePage";
import LoginPage from "../pageObjects/LoginPage/LoginPage";



test("Sign in test invalid",async ({page}) => {
    const login = new LoginPage(page);
    await login.openBookMyShowPage();
    await login.isSignInInvalid('2zzzszs2zz');
  });

test("Regression Search test invalid",async({page})=>{
    const homePage = new HomePage(page);
    await homePage.openBookMyShowPage();
    await homePage.regressionSearch('/////');
  });

test("Number test invalid",async ({page}) => {
    const login = new LoginPage(page);
    await login.openBookMyShowPage();
    await login.phoneInvalid('0000000000');
  });