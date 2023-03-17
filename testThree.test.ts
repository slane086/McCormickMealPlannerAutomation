import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { mccormick } from "./mccormickWBP";

describe("should open to the flavor profile", () => {
test("should open the flavor profile", async () => {
await driver.get("https://www.mccormick.com/")
await driver.manage().window().maximize();
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
await driver.sleep(3000);
await driver.quit()
})
})