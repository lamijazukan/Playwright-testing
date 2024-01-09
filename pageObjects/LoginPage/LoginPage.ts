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

  
    async isSignInInvalid(email: any) {
      await this.page.locator(locators.signIn).click();
      await this.page.locator(locators.emailc).click();
      await this.page.locator(locators.inputMailSecond).fill(email);
      expect(await this.page.locator(locators.invalidMail).isVisible());
      await this.page.waitForTimeout(2000); 
    }

    async phoneInvalid(phone: any) {
      await this.page.locator(locators.signIn).click();
      await this.page.waitForTimeout(2000);
      await this.page.locator(locators.continuePhone).click();
      await this.page.waitForTimeout(2000);
      await this.page.locator(locators.phoneBox).click();
      await this.page.locator(locators.phoneBox).fill(phone);
      await this.page.waitForTimeout(2000);
      await this.page.locator(locators.numberCont).click();
      await this.page.waitForTimeout(10000);
      expect(await this.page.locator(locators.warningPhone).isVisible());
      await this.page.waitForTimeout(2000);
    }
  
  }