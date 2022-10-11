const puppeteer = require('puppeteer');



(async () => {

  const markets = ['https://www.santaisabel.cl/'] 

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(markets[0]);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

//https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
// https://pptr.dev/