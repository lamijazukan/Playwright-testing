import PageClass from "../PageClass/PageClass";
import { locators } from "./DetailedPageLocators";
import { expect } from "playwright/test";
export default class DetailedPage extends PageClass {
    
    async selectTime() {
        await this.page.locator(locators.time).nth(0).click();
        expect(await this.page.locator(locators.seatPopup).isVisible());
        await this.page.locator(locators.selectButton).click();
        expect(await locators.layoutURL === this.page.url());
        


     
      }


}