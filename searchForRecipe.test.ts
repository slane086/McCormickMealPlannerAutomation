import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
import { BasePage } from "./basePage";


await driver.findElement(By.css(".nav-item:nth-child(3) > .nav-link")).click();
await driver.findElement(By.css(".meal-planner-banner__button")).click();
await driver.findElement(By.css("#search-box")).sendKeys("French toast");
await driver.findElement(By.css(".search-box__button")).click();
await driver.findElement(By.css("a[href='/recipes/breakfast-brunch/overnight-french-toast']")).click();
await driver.findElement(By.css(".btn--add-to-meal-planner")).click();
await driver.findElement(By.css("td[data-column='Wednesday']")).click();
await driver.findElement(By.css(".category-select")).click();
await driver.findElement(By.css(".category-select .dropdown-item[data-value='Breakfast']")).click();
await driver.findElement(By.css(".meal-planner__add-button")).click();
await driver.quit();