import { expect } from "playwright/test";
import { locators } from "./HomePageLocators";
import PageClass from "../PageClass/PageClass";

export default class HomePage extends PageClass {

  async openSearchVisible() {
    await this.page.locator(locators.search).click();
    expect(await this.page.locator(locators.secondSearch).isVisible());
  }
  
  async checkMovie() {
    await this.page.locator(locators.movieFromHome).nth(0).click();
    expect (await this.page.locator('h1:has-text("Dunki")').isVisible())
    await this.page.locator(locators.bookTicket).nth(0).click();
    expect(await this.page.locator('h1:has-text("Dunki - Hindi")').isVisible());
  };

}
