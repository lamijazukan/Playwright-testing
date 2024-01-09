import { expect } from "playwright/test";
import { locators } from "./LoginPageLocators";
import PageClass from "../PageClass/PageClass";

export default class LoginPage extends PageClass{

    async isSignInPopUpVisible() {
        await this.page.locator(locators.signIn).click();
        expect(await this.page.locator(locators.poUp).isVisible());
      }

    async isSignInValid(email: any, password: any) {
      await this.page.locator(locators.google).click();
      const newPopupPage = await this.page.waitForEvent('popup');
      await newPopupPage.locator(locators.inputMail).fill(email);
      await newPopupPage.locator(locators.buttonNext).click();
      await newPopupPage.locator(locators.inputPassword).fill(password);
      await newPopupPage.locator(locators.buttonNext).click();
      expect(await this.page.locator(locators.userGreeting).isVisible());
    }
  
  }