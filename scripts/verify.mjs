import { chromium } from "@playwright/test";
import assert from "node:assert/strict";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];
try {
  for (const edition of ["now", "future", "sxsw"]) {
    for (const [name, width, height] of [
      ["desktop", 1440, 1000],
      ["mobile", 390, 844],
    ]) {
      const page = await browser.newPage({
        viewport: { width, height },
        reducedMotion: "reduce",
      });
      page.on("pageerror", (error) => {
        errors.push(error.message);
        console.error(error.message);
      });
      page.on("console", (message) => {
        if (message.type() === "error") {
          errors.push(message.text());
          console.error(message.text());
        }
      });
      await page.goto(`http://127.0.0.1:3000/${edition}`);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `${name} overflow`,
      );
      assert.equal(
        await page
          .locator('.edition-nav [aria-current="page"]')
          .getAttribute("href"),
        `/${edition}`,
      );
      await page.getByRole("tab").nth(0).click();
      await page
        .getByRole("heading", {
          name:
            edition === "now"
              ? "A day that opens a door."
              : edition === "sxsw"
                ? "Start your trip with a connection."
                : "An introduction, naturally.",
        })
        .waitFor();
      assert.equal(await page.locator('[name="duration"]').inputValue(), "day");
      await page.getByRole("tab").nth(0).press("End");
      await page
        .getByRole("heading", {
          name:
            edition === "now"
              ? "Give Austin a little more time."
              : edition === "sxsw"
                ? "Let the best part be the afterword."
                : "Try on a different rhythm.",
        })
        .waitFor();
      await page.getByRole("tab").nth(1).click();
      await page.getByText("Where would I stay?", { exact: true }).click();
      assert.equal(await page.locator("details[open]").count(), 1);
      await page.getByText("Where would I stay?", { exact: true }).click();
      await page.locator('[name="name"]').fill("Test Visitor");
      await page.locator('[name="email"]').fill("visitor@example.com");
      await page.locator('[name="timing"]').fill("Next spring");
      await page.getByRole("button", { name: "Time in nature" }).click();
      await page
        .getByRole("button", { name: "Prepare my visit request" })
        .click();
      await page
        .getByRole("heading", { name: "Your invitation starts here." })
        .waitFor();
      assert.match(
        await page.locator(".request-preview pre").innerText(),
        /Test Visitor[\s\S]*Next spring[\s\S]*Time in nature/,
      );
      assert.match(
        await page.locator(".request-preview pre").innerText(),
        edition === "sxsw"
          ? /SXSW/
          : edition === "now"
            ? /under construction/
            : /future Sanctuary/,
      );
      await page.getByRole("button", { name: "Edit details" }).click();
      assert.equal(
        await page.locator('[name="name"]').inputValue(),
        "Test Visitor",
      );
      assert.equal(
        await page.locator('[name="timing"]').inputValue(),
        "Next spring",
      );
      if (name === "mobile") {
        await page.getByRole("button", { name: "Open menu" }).click();
        await page
          .getByRole("navigation", { name: "Main navigation" })
          .getByRole("link", { name: "A little Austin" })
          .click();
        assert.equal(
          await page
            .getByRole("button", { name: "Open menu" })
            .getAttribute("aria-expanded"),
          "false",
        );
      }
      await page.reload();
      for (const image of await page.locator("img").all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((img) => img.decode());
      }
      await page.evaluate(async () => {
        await document.fonts.ready;
        window.scrollTo(0, 0);
      });
      await page.screenshot({
        path: `.impeccable/review/${edition}-${name}.png`,
        fullPage: true,
      });
      console.log(
        `${edition} ${name}: images, overflow, itinerary selection, keyboard tabs, FAQ, form preview and edit passed`,
      );
      await page.close();
    }
  }
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
}
