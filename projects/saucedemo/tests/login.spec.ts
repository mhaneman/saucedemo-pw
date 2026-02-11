import { test } from "../fixtures";
import { InventoryPage } from "../pages/inventoryPage";

test("login should work", async ({ loginPage }) => {
  await loginPage.login("standard_user", "secret_sauce");

  const inventory = new InventoryPage(loginPage.page);
});
