import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { BasePage } from "./basePage";

await driver.get("https://www.mccormick.com/");
await driver.manage().window().maximize();
await driver.findElement(By.css(".ow-btn-secondary ow-btn-secondary-sm"))
await driver.findElement(By.id("username")).sendKeys("slane5785@gmail.com");
await driver.findElement(By.id("password")).sendKeys("Password1234", Key.RETURN);
await driver.findElement(By.css(".nav-item:nth-child(3) > .nav-link")).click();
await driver.findElement(By.css(".meal-planner-banner__button")).click();