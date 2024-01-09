import PageClass from "../PageClass/PageClass";
import { locators } from "./DetailedPageLocators";
import { expect } from "playwright/test";
export default class DetailedPage extends PageClass {

      async selectTime() {
        //select time in hours
        await this.page.locator(locators.time).nth(0).isVisible();
        await this.page.locator(locators.time).nth(0).click();
        expect(await this.page.locator(locators.seatPopup).isVisible());
        //pop up update message
        await this.page.locator(locators.updateMessage).isVisible();
        await this.page.locator(locators.updateMessage).click();
        await this.page.locator(locators.time).nth(0).isVisible();
        await this.page.locator(locators.time).nth(0).click();
        await this.page.screenshot({ path: 'screenshot.png' });
      }
      async seatSelection() {
        //number of seats 
        await this.page.locator(locators.selectButton).click();
        expect(locators.layoutURL === this.page.url());
        //seat location selection
        await this.page.locator(locators.seat).click();
        expect(await this.page.locator(locators.priceButton).isVisible());
      }
      async finalizeBooking() {
        //accepting Terms & Conditions
        await this.page.locator(locators.priceButton).click();
        expect(await this.page.locator(locators.termsMessage).isVisible());
        //navigate to booking summary
        await this.page.locator(locators.acceptTerms).click();
        expect(await this.page.locator(locators.booking).isVisible());
        //proceed to checkout
        await this.page.locator(locators.proceed).click();
        expect(await this.page.locator(locators.paymentInfo).isVisible()); 
      }
 }