import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { mccormick } from "./pageObjects";


describe("tests for mccormick", () => {

    beforeEach(async () => {
        await driver.manage().window().maximize();
      });
    
      afterAll(async () => {
        await driver.quit();
      })

test("should open the flavor profile", async () => {
await driver.get("https://www.mccormick.com/")
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click()
await driver.findElement(By.xpath(('//a[@text()="Meal Planner"]'))).click();
await driver.sleep(2000)
});
});