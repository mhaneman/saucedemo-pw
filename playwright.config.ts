import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "SauceDemo",
      testDir: "./src/tests/",
      use: { baseURL: "https://www.saucedemo.com" },
    },
  ],
});
