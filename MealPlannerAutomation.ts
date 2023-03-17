await driver.findElement(By.xpath(('//a[text()=" Login "]'))).click();
// This is for the login button
await driver.findElement(By.xpath(('//span[@class="icon icon-profile"]'))).click();
    // This is for the flavor profile
await driver.findElement(By.id("username")).sendKeys("slane5785@gmail.com");
await driver.findElement(By.id("password")).sendKeys("Password1234", Key.RETURN);
    // This is to input login information

    await driver.findElement(By.css('.sign-up-btn')).click();
    // This is for the sign up button
    await driver.findElement(By.xpath(('//a[text()="Meal Planner"]'))).click()
    // This is the red Meal Planner button in the flavor profile page

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
    // Quit the WebDriver
    await driver.quit();
  
})

// runTest();
