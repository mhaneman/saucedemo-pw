import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "SauceDemo",
      testDir: "./projects/saucedemo/tests",
      use: { baseURL: "https://www.saucedemo.com" },
    },
    {
      name: "Conduit",
      testDir: "./projects/conduit/tests",
      use: { baseURL: "https://demo.realworld.io" },
    },
  ],
});
