import { expect, test } from "../../fixtures";
import { PageInventory } from "../../pages/PageInventory";

test("verify login page elements are working properly", async ({
  pageLogin,
}) => {
  // verify page elements are visible
  await expect(pageLogin.usernameInput).toBeVisible();
  await expect(pageLogin.passwordInput).toBeVisible();
  await expect(pageLogin.loginButton).toBeVisible();

  await pageLogin.setUsername("standard_user");
  await pageLogin.setPassword("secret_sauce");

  // username field checks
  await expect(pageLogin.usernameInput).toHaveValue("standard_user");

  // password field checks
  await expect(pageLogin.passwordInput).toHaveValue("secret_sauce");
  await expect(pageLogin.passwordInput).toHaveAttribute("type", "password");
  await expect(pageLogin.passwordInput).toHaveText("");
});

test("very an unauthorized login", async ({ pageLogin }) => {
  await pageLogin.login("locked_out_user", "secret_sauce");

  await expect(pageLogin.errorContainer).toBeVisible();
  await expect(pageLogin.errorContainer).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

test("very an authorized login", async ({ pageLogin }) => {
  const inventoryPage = await pageLogin.login("standard_user", "secret_sauce");

  await expect(inventoryPage.page).toHaveURL(/inventory\.html$/);
  await expect(inventoryPage.page).toHaveTitle(/Swag Labs/);
});
