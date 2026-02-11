import { expect, test } from "@playwright/test";
import { PageLogin } from "../../pages/PageLogin";

test("verify login page elements are working properly", async ({ page }) => {
  const loginPage = new PageLogin(page);
  await loginPage.navigateToPage();

  // verify page elements are visible
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  await loginPage.setUsername("standard_user");
  await loginPage.setPassword("secret_sauce");

  // username field checks
  await expect(loginPage.usernameInput).toHaveValue("standard_user");

  // password field checks
  await expect(loginPage.passwordInput).toHaveValue("secret_sauce");
  await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
  await expect(loginPage.passwordInput).toHaveText("");
});

test("very an unauthorized login", async ({ page }) => {
  const loginPage = new PageLogin(page);
  await loginPage.navigateToPage();
  await loginPage.login("locked_out_user", "secret_sauce");

  await expect(loginPage.errorContainer).toBeVisible();
  await expect(loginPage.errorContainer).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

test("very an authorized login", async ({ page }) => {
  const loginPage = new PageLogin(page);
  await loginPage.navigateToPage();
  const inventoryPage = await loginPage.login("standard_user", "secret_sauce");

  await expect(inventoryPage.page).toHaveURL(/inventory\.html$/);
  await expect(inventoryPage.page).toHaveTitle(/Swag Labs/);
});
