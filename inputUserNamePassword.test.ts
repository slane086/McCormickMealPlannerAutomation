import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

import { mccormick } from "./mccormickWBP";


test("should plug in UN and Password", async () => {
await driver.get("https://www.mccormick.com/");
await driver.manage().window().maximize();
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
await driver.findElement(By.xpath(('//a[text()=" Login "]'))).click()
await driver.findElement(By.id("login-email")).sendKeys("slane5785@gmail.com");
await driver.findElement(By.id("login-password")).sendKeys("Password1234", Key.RETURN);
await driver.findElement(By.css('.sign-up-btn')).click()
await driver.findElement(By.xpath(('//a[text()="Meal Planner"]'))).click()
await driver.quit();
})