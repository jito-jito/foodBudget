const writeLetterByLetter = require('../utils/writeLetterByLetter')
const waitForTime = require('../utils/waitForTime')

const santaIsabelSLT = {
  mainLink: 'https://www.santaisabel.cl/',
  search: {
    input: '#header-search > input',
    sendButton: '#header-search > button[type=submit]'
  },
  products: {
    itemsContainer: '.shelf-content',
    item: '.shelf-content > .shelf-product-island',
    brand: 'h2[class=shelf-product-brand]',
    description: 'h2[class=shelf-product-title-text]',
    singlePrice: '.product-sigle-price-wrapper',
    link: 'a[class=shelf-product-title]',
    img: 'img[class=lazy-image]'
  },
  slides: {
    container: '.slides',
    unselectedSlide: '.slides > button[class="page-number "]'
  }
}

async function getProducts(pageInstance, selectors) {
  const data = await pageInstance.evaluate(function(selectors) {
    const products = document.querySelectorAll(selectors.products.item)
    let productsData = []
    products.forEach(p => productsData.push(
      {
        description: p.querySelector(selectors.products.description).textContent,
        brand: p.querySelector(selectors.products.brand).textContent,
        singlePrice: p.querySelector(selectors.products.singlePrice)?.textContent || p.querySelector('.price-best')?.textContent || 'unable content, probably without stock',
        link: p.querySelector(selectors.products.link)?.href || 'unable content',
        img: p.querySelector(selectors.products.img)?.src || 'unable content'
      }
    ))
  

    return productsData
  }, selectors)

  return data
}

const santaIsabelSTR = async (pageInstance, searchKey) => {
  try {

  await pageInstance.goto(santaIsabelSLT.mainLink)
  await pageInstance.click(santaIsabelSLT.search.input, {
      delay: 500
  })
  await writeLetterByLetter(pageInstance, searchKey)
  await pageInstance.keyboard.press('Enter', {delay: 1500})
  await pageInstance.waitForSelector(santaIsabelSLT.products.item)

  let data = []
  data.push(await getProducts(pageInstance, santaIsabelSLT))


  
    const hasSlides = await pageInstance.waitForSelector(santaIsabelSLT.slides.unselectedSlide, {timeout: 5000})
    const slidesButtons = await pageInstance.$$(santaIsabelSLT.slides.unselectedSlide)

    for await (button of slidesButtons) {
      console.time('evaluate work')
      // await pageInstance.evaluate(slideButton => {
      //   console.log(slideButton)
      //   slideButton.click()
      //   return Promise.resolve()
      // }, button)
      button.evaluate(b => b.click())
      // await button.click()
      console.timeEnd('evaluate work')
      // await waitForTime({ time: 5000 })
      await pageInstance.waitForNavigation() 
      console.log('click', button)

      const productsInPage = await getProducts(pageInstance, santaIsabelSLT)
      console.log('products in page ', productsInPage.length)
      await data.push(productsInPage)
      console.log('total element received= ', data.length)
    }
    console.log('after loop')

    
    return data

  } catch (error) {
    console.log('not ok')
    console.log(error)
    return error
  }

  
}


module.exports = santaIsabelSTR