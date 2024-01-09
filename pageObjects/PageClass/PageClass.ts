import { Page } from "playwright";
import { expect } from "playwright/test"; 

export default class PageClass {
    public page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    async openBookMyShowPage() {
    await this.page.goto("https://in.bookmyshow.com/explore/home/chandigarh");
      // await this.page.waitForLoadState("networkidle");
    }
  }