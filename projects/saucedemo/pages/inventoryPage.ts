import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("");
  }
}
