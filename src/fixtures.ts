import { test as base } from "@playwright/test";

import { PageLogin } from "./pages/PageLogin";
import { PageInventory } from "./pages/PageInventory";

type Fixtures = {
  pageLogin: PageLogin;
  pageInventory: PageInventory;
};

export const test = base.extend<Fixtures>({
  pageLogin: async ({ page }, use) => {
    const pageLogin = new PageLogin(page);
    await pageLogin.goto();
    await use(pageLogin);
  },

  pageInventory: async ({ page }, use) => {
    const pageInventory = new PageInventory(page);
    await use(pageInventory);
  },
});

export { expect } from "@playwright/test";
