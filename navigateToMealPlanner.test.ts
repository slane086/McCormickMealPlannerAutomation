import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
const fs = require('fs');
import { mccormick } from "./pageObjects";
import { BasePage } from "./basePage";
const page = new mccormick()

test("navigate to meal planner", async () => {
await page.navigate();
await page.driver.manage().window().maximize();
await page.driver.sleep(3000);
await page.click(page.mealPlannerTab);
await fs.writeFile(`${__dirname}/GreekDish.png`,
await page.driver.takeScreenshot(), "base64", 
(e) => {
    if (e) console.error(e)
    else console.log('Save Successful')

});
await page.driver.quit()
});
