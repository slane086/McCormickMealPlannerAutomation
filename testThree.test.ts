import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { mccormick } from "./pageObjects";
import { BasePage } from "./basePage";

describe("tests for mccormick", () => {

    beforeAll(async () => {
        await driver.manage().window().maximize();
      });
    
      afterAll(async () => {
        await driver.quit();
      });

test("searching for a recipe", async () => {
await driver.get("https://www.mccormick.com/")
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
await driver.findElement(By.css(".nav-item:nth-child(3) > .nav-link")).click();
await driver.findElement(By.css(".meal-planner-banner__button")).click();
await driver.findElement(By.css("#search-box")).sendKeys("French toast");
await driver.findElement(By.css(".search-box__button")).click();
await driver.sleep(2000)
});
});