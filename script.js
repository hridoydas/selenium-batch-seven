const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const productName = "Nike react phantom";
async function testRun() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  await driver.get("https://demo.evershop.io/");
  await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
  await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike");
  await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
  await driver.findElement(By.xpath(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`)).click();
  await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'S')]")).click();
  await driver.sleep(3000);
  await driver.findElement(By.xpath("//a[@href='#' and contains(.,'Black')]")).click();
  await driver.sleep(3000)
  await driver.findElement(By.xpath("//input[@name='qty']")).clear();
  await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys(2);
  await driver.findElement(By.xpath("//button[contains(.,'CART')]")).click();
  await driver.sleep(4000);
  await driver.findElement(By.xpath("//a[@class='add-cart-popup-button']")).click();
  await driver.sleep(5000);
  await driver.quit();
}

testRun();
