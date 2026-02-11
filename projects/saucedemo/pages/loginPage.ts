import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async login(user: string, password: string): Promise<void> {
    await this.page.goto("");
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.pause();
  }
}
