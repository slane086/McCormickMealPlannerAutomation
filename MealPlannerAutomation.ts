import { Builder, By, Key, until } from "selenium-webdriver";
const chromedriver = require("chromedriver")

async function runTest() {
  // Set up the Selenium WebDriver
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get("https://www.mccormick.com/");

  try {
    // Input username and password
    await driver.findElement(By.id("username")).sendKeys("slane5785@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("Password1234", Key.RETURN);

    // Navigate to meal planner
    await driver.findElement(By.css(".nav-item:nth-child(3) > .nav-link")).click();
    await driver.findElement(By.css(".meal-planner-banner__button")).click();

    // Select a day and category on the meal planner
    await driver.findElement(By.css("td[data-column='Wednesday']")).click();
    await driver.findElement(By.css(".category-select")).click();
    await driver.findElement(By.css(".category-select .dropdown-item[data-value='Breakfast']")).click();

    // Search for a recipe
    await driver.findElement(By.css("#search-box")).sendKeys("French toast");
    await driver.findElement(By.css(".search-box__button")).click();

    // Select a recipe and add it to the meal planner
    await driver.findElement(By.css("a[href='/recipes/breakfast-brunch/overnight-french-toast']")).click();
    await driver.findElement(By.css(".btn--add-to-meal-planner")).click();
    await driver.findElement(By.css("td[data-column='Wednesday']")).click();
    await driver.findElement(By.css(".category-select")).click();
    await driver.findElement(By.css(".category-select .dropdown-item[data-value='Breakfast']")).click();
    await driver.findElement(By.css(".meal-planner__add-button")).click();

    // Navigate to meal planner
    await driver.findElement(By.css(".meal-planner-banner__button")).click();
  } finally {
    // Quit the WebDriver
    await driver.quit();
  }
}

runTest();
