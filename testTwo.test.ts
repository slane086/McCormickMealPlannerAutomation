import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { mccormick } from "./mccormickWBP";

describe("going back to the home page", () => {

    beforeAll(async () => {
        await driver.manage().window().maximize();
      });
    
      afterAll(async () => {
        await driver.quit();
      });

test("should open flavor profile and go back to the home page and take a screen shot", async () => {
await driver.get("https://www.mccormick.com/")
await driver.sleep(3000);
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
await driver.sleep(3000);
await driver.findElement(By.xpath(('//div[@class=" component-content "]'))).click()
})
})