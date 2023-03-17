import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from './basePage'

driver: WebDriver

export class mccormick extends BasePage {
searchBox: By = By.xpath('//span[@class="icon icon-search search-utility"]');
recipeTab: By = By.xpath('(//a[text()="Recipes"])[1]');
stPattyTab: By = By.xpath('(//a)[68]');
irishCoffeeTab: By = By.xpath('(//div[@class="ow-square-recipe-card ajax-recipe-card clickable-card"])[1]');
viewRecipeOnlyTab: By = By.xpath('//button[@class="ow-recipe-video-button"]');
checkoutCart = By.xpath('//span[@class="utility-icon"]');
makeGreatTab: By = By.xpath('(//a[text()="Make it Great"])[1]');
greekBtn: By = By.xpath('(//a[text()="Greek"])[1]');
mealPlannerTab: By = By.xpath('(//a[text()="Meal Planner"])[1]');
searchField: By = By.id('.header-search-input');
    static driver: any;
}

constructor(){
    super({url: 'https://www.mccormick.com/'})
}   


