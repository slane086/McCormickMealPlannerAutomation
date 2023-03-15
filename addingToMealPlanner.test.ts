import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
import { BasePage } from "./basePage";

describe("Accessing McCormick website and adding a recipe to the meal planner", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.manage().window().maximize();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test("should navigate to McCormick website and add a recipe to the meal planner", async () => {
    await driver.get("https://www.mccormick.com/meal-planner%22);
    await driver.wait(until.elementLocated(By.css(".calendar-container")), 10000);
    await driver.findElement(By.css("td[data-column='Monday'][data-row='1']")).click();
    await driver.findElement(By.css(".category-select")).click();
    await driver.findElement(By.css(".category-select .dropdown-item[data-value='Dinner']")).click();
    await driver.findElement(By.css(".mealplan-recipe-add-btn")).click();
    await driver.findElement(By.css(".search-boxinput")).sendKeys("pasta");
    await driver.findElement(By.css(".search-boxbutton")).click();
    expect(await driver.findElement(By.css(".results__count")).getText()).toContain("Pasta");
  });
});