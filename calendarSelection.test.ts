import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')
import { BasePage } from "./basePage";

describe("Accessing McCormick website and selecting a meal", () => {
    let driver;

    beforeAll(async () => {
      driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
      await driver.manage().window().maximize();
    });

    afterAll(async () => {
      await driver.quit();
    })

    it("should navigate to McCormick website and select a meal", async () => {
      await driver.get("https://www.mccormick.com/meal-planner%22);
      await driver.wait(until.elementLocated(By.css(".calendar-container")), 10000);
      await driver.findElement(By.css("td[data-column='Monday'][data-row='1']")).click();
      await driver.findElement(By.css(".category-select")).click();
      await driver.findElement(By.css(".category-select .dropdown-item[data-value='Breakfast']")).click();
      expect(await driver.findElement(By.css(".mealplan-recipe-header")).getText()).toContain("Breakfast");
    });
  });