const writeLetterByLetter = require('../utils/writeLetterByLetter')

const tottuslSLT = {
  mainLink: 'https://tottus.falabella.com/tottus-cl',
  search: {
    input: '#testId-search-wrapper #testId-SearchBar-Input',
    sendButton: '#testId-search-wrapper button[class=SearchBar-module_searchBtnIcon__2L2s0]'
  },
  products: {
    itemsContainer: '#testId-searchResults-products',
    item: '#testId-searchResults-products div[data-pod]'
  }
}

const tottusSTR = async (pageInstance, searchKey) => {
  
  await pageInstance.goto(tottuslSLT.mainLink)

  await pageInstance.click('body', {
    delay: 500
  })

  await pageInstance.click(tottuslSLT.search.input, {
      delay: 500
  })
  
  await writeLetterByLetter(pageInstance, searchKey)
  await pageInstance.keyboard.press('Enter', {delay: 1500})

  await pageInstance.waitForSelector(tottuslSLT.products.itemsContainer)

  let products = await pageInstance.evaluate(function(selectors) {
    const products = document.querySelectorAll(selectors.products.item)
    let productsData = []
    products.forEach(p => productsData.push(
      {p}
      // {
      //   description: p.querySelector(selectors.products.description).textContent,
      //   brand: p.querySelector(selectors.products.brand).textContent,
      //   singlePrice: p.querySelector(selectors.products.singlePrice)?.textContent || p.querySelector('.price-best')?.textContent || 'unable content, probably without stock',
      //   link: p.querySelector(selectors.products.link)?.href || 'unable content',
      //   img: p.querySelector(selectors.products.img)?.src || 'unable content'
      // }
    ))

    return productsData
  }, tottuslSLT)
  console.log(products)
  return products

}


module.exports = tottusSTR