import { expect } from "playwright/test";
import { locators } from "./HomePageLocators";
import PageClass from "../PageClass/PageClass";

export default class HomePage extends PageClass {

  async openSearchVisible() {
    await this.page.locator(locators.search).click();
    expect(await this.page.locator(locators.secondSearch).isVisible());
  }

  async searchMovie(input: any) {
    await this.page.locator(locators.secondSearch).fill(input);
    await this.page.keyboard.press("Enter");
    //expect(await this.page.locator(locators.searchMovie).nth(0).isVisible());
  }
  

  async chooseLocation() {
    await this.page.locator(locators.location).click();
    expect(await this.page.locator(locators.city).isVisible());
    await this.page.locator(locators.mumbai).nth(0).click();
    expect(await this.page.locator(locators.searchMovie).isVisible());
  }
  
  async checkMovie() {
    await this.page.locator(locators.movieFromHome).nth(0).click();
    expect (await this.page.locator('h1:has-text("Dunki")').isVisible())
    await this.page.locator(locators.bookTicket).nth(0).click();
    expect(await this.page.locator('h1:has-text("Dunki - Hindi")').isVisible());
  };

  async regressionSearch(input:any) {
    await this.page.locator(locators.search).click();
    await this.page.waitForTimeout(2000);
    expect(await this.page.locator(locators.secondSearch).isVisible());
    await this.page.waitForTimeout(2000);
    await this.page.locator(locators.secondSearch).fill(input);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000);
    expect (await this.page.locator(locators.errorSearch).nth(0).isVisible());
    await this.page.waitForTimeout(10000);
  }

}
