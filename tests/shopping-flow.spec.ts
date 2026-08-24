import { test,expect } from '@playwright/test';

test("Navigate to url",  async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //Assert the title of the page
    await expect(page).toHaveTitle("Demo Web Shop");
})

test("Search for Laptop", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('Laptop');
    await page.getByRole('button', {name: 'Search'}).click();

    //Assert the item displayed in search result
    await expect(page.getByLabel('Search keyword:')).toHaveValue('Laptop');
})

 test("Add Laptop to Cart", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('Laptop');
    await page.getByRole('button', {name: 'Search'}).click();
    await page.getByRole('link', {name: 'Picture of 14.1-inch Laptop'}).click();
    await page.locator('#add-to-cart-button-31').click();


    //Assert product added to cart

    await expect(page.locator('#bar-notification')).toContainText("The product has been added to your shopping cart");
     })

test("View Cart", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('Laptop');
    await page.getByRole('button', {name: 'Search'}).click();
    await page.getByRole('link', {name: 'Picture of 14.1-inch Laptop'}).click();
    await page.locator('#add-to-cart-button-31').click();
    await expect(page.locator('#bar-notification')).toContainText("The product has been added to your shopping cart");
    await (page.locator('#topcartlink')).click()
  
    //Assert user landed on the cart page
    await expect (page).toHaveTitle("Demo Web Shop. Shopping Cart");
})

test("Checkout", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('Laptop');
    await page.getByRole('button', {name: 'Search'}).click();
    await page.getByRole('link', {name: 'Picture of 14.1-inch Laptop'}).click();
    await page.locator('#add-to-cart-button-31').click();
    await expect(page.locator('#bar-notification')).toContainText("The product has been added to your shopping cart");
    await (page.locator('#topcartlink')).click();
    await page.locator('#termsofservice').check();
    await expect(page.locator('#termsofservice')).toBeChecked();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByRole('button', {name: 'Checkout as Guest'}).click();
  
    //Assert user landed on the cart page
    await expect (page).toHaveTitle("Demo Web Shop. Checkout");
 
})

test.only("Checkout as Guest", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill('Laptop');
    await page.getByRole('button', {name: 'Search'}).click();
    await page.getByRole('link', {name: 'Picture of 14.1-inch Laptop'}).click();
    await page.locator('#add-to-cart-button-31').click();
    await expect(page.locator('#bar-notification')).toContainText("The product has been added to your shopping cart");
    await (page.locator('#topcartlink')).click();
    await page.locator('#termsofservice').check();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByRole('button', {name: 'Checkout as Guest'}).click();
    await page.getByRole('textbox', {name: 'First name:'}).fill('Tester');
    await page.getByRole('textbox', {name: 'Last name:'}).fill('Hiba');
    await page.getByRole('textbox', {name: 'Email:'}).fill('testerhiba@mailinator.com');
   // await page.get('dropdown', {name: 'Country:'}).selectOption('India');
  
    //Assert user landed on the cart page
    await expect (page).toHaveTitle("Demo Web Shop. Checkout");
 
})
    
    

    
 

