import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/HomePage/HomePage";
import LoginPage from "../pageObjects/LoginPage/LoginPage";
import PageClass from "../pageObjects/PageClass/PageClass";
import DetailedPage from "../pageObjects/DetailedPage/DetailedPage";

test("Home page search test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openBookMyShowPage();
  await homePage.openSearchVisible();
  
});

test("Sign in test",async ({page}) => {
  const login = new LoginPage(page);
  await login.openBookMyShowPage();
  await login.isSignInPopUpVisible();
  await login.isSignInValid("zaynahknowles@gmail.com", "softwaretesting123!");
});

test.only("Check Movie Test",async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.openBookMyShowPage();
  await homePage.checkMovie();
  const detailedPage = new DetailedPage(page);
  await detailedPage.selectTime();
});