import { expect, type Locator, type Page } from "@playwright/test";
import { ComponentFooter } from "../components/ComponentFooter";
import { ComponentSidebar } from "../components/ComponentSidebar";

export class PageCart {
  readonly page: Page;
  readonly buttonContinueShopping: Locator;
  readonly buttonCheckout: Locator;
  readonly footer: ComponentFooter;
  readonly sidebar: ComponentSidebar;

  constructor(page: Page) {
    this.page = page;
    this.buttonContinueShopping = page.locator("#continue-shopping");
    this.buttonCheckout = page.locator("#checkout");
    this.footer = new ComponentFooter(page);
    this.sidebar = new ComponentSidebar(page);
  }
}
