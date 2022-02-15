const productName = 'Nivona CafeRomatica 790';
const buyerPhone = '+380979998877';
const buyerEmail = 'email@test.com';
const buyerName = 'Alex';
const buyerCity = 'Lviv';

const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Searching for the product
  await page.goto('https://megadom.biz/');
  
  await page.click('[placeholder="Поиск\\ по\\ сайту\\.\\.\\."]');
  await page.fill('[placeholder="Поиск\\ по\\ сайту\\.\\.\\."]', productName);
  
  await page.click('#form_search a');
  await expect(page).toHaveURL(/poisk/);

  // Adding to cart
  await page.click(`text=${productName}`);
  await expect(page).toHaveURL(/catalog/);

  await page.click('text=Купить');

  // Check out
  await page.click('[placeholder="ФИО"]');
  await page.fill('[placeholder="ФИО"]', buyerName);

  await page.click('[placeholder="Телефон"]');
  await page.fill('[placeholder="Телефон"]', buyerPhone);

  await page.click('[placeholder="Город"]');
  await page.fill('[placeholder="Город"]', buyerCity);

  await page.click('[placeholder="E-mail"]');
  await page.fill('[placeholder="E-mail"]', buyerEmail);

  // await page.click('text=Подтвердить заказ');

});