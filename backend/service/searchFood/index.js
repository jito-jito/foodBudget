const puppeteer = require('puppeteer');



(async () => {

  const markets = ['https://www.santaisabel.cl/'] 
  const search = {
    input: '#header-search > input',
    sendButton: '#header-search > button[type=submit]'
  }
  const products = {
    itemsContainer: '.shelf-list',
    item: '.shelf-list > .shelf-item',
    brand: '.shelf-list > .shelf-item h2[class=shelf-product-brand]',
    description: '.shelf-list > .shelf-item h2[class=shelf-product-title-text]',
    singlePrice: '.shelf-list > .shelf-item span[class=product-sigle-price-wrapper]',
    link: '.shelf-list > .shelf-item a[class=shelf-product-title]',
    img: '.shelf-list > .shelf-item img[class=lazy-image]'
  }


  const tottus = {
    mainLink: 'https://tottus.falabella.com/tottus-cl',
    search: {
      input: '#testId-search-wrapper #testId-SearchBar-Input',
      sendButton: '#testId-search-wrapper button[class=SearchBar-module_searchBtnIcon__2L2s0]'
    },
    products: {
      itemsContainer: '#testId-searchResults-products',
      item: '#testId-searchResults-products div[class=grid-pod]'
    }
  }


  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(markets[0]);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

//https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
// https://pptr.dev/