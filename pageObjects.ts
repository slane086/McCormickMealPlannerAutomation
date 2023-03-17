import { By, WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { BasePage } from './basePage'
const chromedriver = require ("chromedriver");

driver: WebDriver

export class mccormick extends BasePage {
flavorProfile: By = By.xpath('//span[@class="icon icon-profile"]');
login: By = By.xpath('//a[text()=" Login "]');
emailInput: By = By.id("login-email");
passwordInput: By = By.id("login-password");
signUp: By = By.css('.sign-up-btn');
mealPlanner: By = By.xpath('//a[text()="Meal Planner"]');
home2Page: By = By.xpath('//a[@class="component-content"]')
recipe: By = By.xpath('//a[@class="Recipes"]')
homePage: By = By.name(" logo ");
constructor(){
         super({url: 'https://www.mccormick.com/'})
    }
    
}
