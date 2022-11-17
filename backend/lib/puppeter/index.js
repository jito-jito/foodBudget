require('dotenv').config()
const puppeteer = require('puppeteer')
const santaIsabelSTR = require('./searchStrategies/santaIsabelSTR.js')
const tottusSTR = require('./searchStrategies/tottusSTR.js')

function searchByStrategy(strategy, pageInstance, searchKey) {
  switch(strategy) {
    case 'santaIsabel':
    case 'SantaIsabel':
      return santaIsabelSTR(pageInstance, searchKey)
    case 'tottus':
    case 'Tottus':  
      return tottusSTR(pageInstance, searchKey)
  }
}

async function searchInPage(strategy, searchKey) {
  const browser = await puppeteer.launch(
    process.env.MODE === 'development' ?
    { headless: false,
      slowMo: 200,
      devtools: true
    } : ""
  )

  const page = await browser.newPage()

  const data = await searchByStrategy(strategy, page, searchKey)

  // await browser.close()
  // return data

}

module.exports = searchInPage