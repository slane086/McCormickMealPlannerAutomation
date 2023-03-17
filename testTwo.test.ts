import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const fs = require('fs');
import { mccormick } from "./pageObjects";
import { BasePage } from "./basePage";

describe("test for mccormick", () => {

    beforeAll(async () => {
        await driver.manage().window().maximize();
      });
    
      afterAll(async () => {
        await driver.quit();
      });

test("should open flavor profile and go back to the home page and take a screen shot", async () => {
await driver.get("https://www.mccormick.com/")
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
await driver.findElement(By.xpath(('//div[@class="component-content"]'))).click()
await fs.writeFile(`${__dirname}/test.txt`, Text, (e) => {
    if (e) console.error(e)
    else console.log('Save Succesful')

});
});
});