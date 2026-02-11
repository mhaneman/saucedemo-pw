import { expect, type Locator, type Page } from "@playwright/test";

import { PageInventory } from "./PageInventory";

export class PageLogin {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorContainer = page.locator('[data-test="error"]');
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async setUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async setPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async login(user: string, password: string): Promise<PageInventory> {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return new PageInventory(this.page);
  }
}
