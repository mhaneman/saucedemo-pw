import { expect, type Locator, type Page } from "@playwright/test";
import { ComponentProduct } from "../components/ComponentProduct";
import { ComponentFooter } from "../components/ComponentFooter";
import { ComponentSidebar } from "../components/ComponentSidebar";

export class InventoryPage {
  readonly page: Page;
  readonly product: ComponentProduct;
  readonly footer: ComponentFooter;
  readonly sidebar: ComponentSidebar;

  constructor(page: Page) {
    this.page = page;
    this.product = new ComponentProduct(page);
    this.footer = new ComponentFooter(page);
    this.sidebar = new ComponentSidebar(page);
  }
}
