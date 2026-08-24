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

test("Checkout as Guest", async({page}) =>{
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
    
    

    //Assert user landed Billing Address page
    await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();
 
})

test("Filling CheckOut form - Billing Address", async({page}) =>{
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
    await page.locator('#BillingNewAddress_CountryId').selectOption('India');
    await page.locator('#BillingNewAddress_City').fill('Test City');
    await page.locator('#BillingNewAddress_Address1').fill('Test Address');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('123456');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.getByRole('button', {name: 'Continue'}).click();

     //Assert user landed Shipping Address page
    await expect(page.getByRole('heading', { name: 'Shipping Address' })).toBeVisible();

})

test("Filling CheckOut form - Shipping Address", async({page}) =>{
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
    await page.locator('#BillingNewAddress_CountryId').selectOption('India');
    await page.locator('#BillingNewAddress_City').fill('Test City');
    await page.locator('#BillingNewAddress_Address1').fill('Test Address');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('123456');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('button', {name: 'Continue'})).toBeEnabled();
    await page.getByRole('button', {name: 'Continue'}).click();


     //Assert user landed Shipping Method page
    await expect(page.getByRole('heading', { name: 'Shipping Method' })).toBeVisible();

})

    test("Filling CheckOut form - Shipping Method", async({page}) =>{
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
    await page.locator('#BillingNewAddress_CountryId').selectOption('India');
    await page.locator('#BillingNewAddress_City').fill('Test City');
    await page.locator('#BillingNewAddress_Address1').fill('Test Address');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('123456');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('button', {name: 'Continue'})).toBeEnabled();
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('radio', {name: ' Ground (0.00)'})).toBeChecked();
    await page.getByRole('button', {name: 'Continue'}).click();


     //Assert user landed Payment Method page
    await expect(page.getByRole('heading', { name: 'Payment method' })).toBeVisible();
    })

    test("Filling CheckOut form - Payment Method", async({page}) =>{
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
    await page.locator('#BillingNewAddress_CountryId').selectOption('India');
    await page.locator('#BillingNewAddress_City').fill('Test City');
    await page.locator('#BillingNewAddress_Address1').fill('Test Address');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('123456');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('button', {name: 'Continue'})).toBeEnabled();
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('radio', {name: ' Ground (0.00)'})).toBeChecked();
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.locator('#paymentmethod_2').check();
    await page.getByRole('button', {name: 'Continue'}).click();

    //Assert user landed Payment Information page
    await expect(page.getByRole('heading', { name: 'Payment information' })).toBeVisible();

 
})

 test("Filling CheckOut form - Payment Method and Confirm Order", async({page}) =>{
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
    await page.locator('#BillingNewAddress_CountryId').selectOption('India');
    await page.locator('#BillingNewAddress_City').fill('Test City');
    await page.locator('#BillingNewAddress_Address1').fill('Test Address');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('123456');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('button', {name: 'Continue'})).toBeEnabled();
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByRole('radio', {name: ' Ground (0.00)'})).toBeChecked();
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.locator('#paymentmethod_2').check();
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.locator ('#CreditCardType').selectOption('Master card');
    await page.locator('#CardholderName').fill('Tester Hiba');
    await page.locator('#CardNumber').fill('5555555555554444');
    await page.locator('#ExpireMonth').selectOption('12');
    await page.locator('#ExpireYear').selectOption('2027');
    await page.locator('#CardCode').fill('123');
    await page.getByRole('button', {name: 'Continue'}).click();

    //Assert user landed Confirm Order page
    await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible();

    await page.getByRole('button', {name: 'Confirm'}).click();

    //Assert order have been placed successfully
    await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();
    await expect(page.getByText('Order number:')).toBeVisible();

 });
