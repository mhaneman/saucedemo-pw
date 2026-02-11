import { expect, type Locator, type Page } from "@playwright/test";
import { ComponentProduct } from "../components/ComponentProduct";
import { ComponentFooter } from "../components/ComponentFooter";
import { ComponentSidebar } from "../components/ComponentSidebar";

export class PageInventory {
  readonly page: Page;
  readonly title: Locator;
  readonly productsContainer: Locator;
  readonly footer: ComponentFooter;
  readonly sidebar: ComponentSidebar;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("h1");
    this.productsContainer = page.locator(".inventory_lists");
    this.footer = new ComponentFooter(page);
    this.sidebar = new ComponentSidebar(page);
  }

  async getAllProducts() {
    const all = await this.productsContainer.all();
    return all.map((locator) => new ComponentProduct(locator));
  }
}
