import { expect, type Locator, type Page } from "@playwright/test";

export class ComponentProduct {
  readonly root: Locator;

  constructor(root: Locator) {
    this.root = root;
  }
}
