import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/HomePage/HomePage";
import LoginPage from "../pageObjects/LoginPage/LoginPage";
import PageClass from "../pageObjects/PageClass/PageClass";
import DetailedPage from "../pageObjects/DetailedPage/DetailedPage";

test("Smoke Test 1", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openBookMyShowPage();

  const login = new LoginPage(page);
  await login.openBookMyShowPage();
  await login.isSignInPopUpVisible();
  await login.isSignInValid("zaynahknowles@gmail.com", "softwaretesting123!");

  await homePage.openBookMyShowPage();
  await homePage.checkMovie();
  const detailedPage = new DetailedPage(page);
  await detailedPage.selectTime();
  await detailedPage.seatSelection();
  await detailedPage.finalizeBooking();
  
});

test.only("Smoke Test 2", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openBookMyShowPage();

  const login = new LoginPage(page);
  await login.openBookMyShowPage();
  await login.isSignInPopUpVisible();
  await login.isSignInValid("zaynahknowles@gmail.com", "softwaretesting123!");
  
  await homePage.openBookMyShowPage();
  await homePage.chooseLocation();

  await homePage.openBookMyShowPage();
  await homePage.openSearchVisible();
  await homePage.searchMovie("Dunki");

  const detailedPage = new DetailedPage(page);
  await detailedPage.selectTime();
  await detailedPage.seatSelection();
  await detailedPage.finalizeBooking();
  
});

