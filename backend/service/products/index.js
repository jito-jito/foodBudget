const searchInPage = require('../.././lib/puppeter/index.js')

async function searchProducts(searchKey, options) {  

  const markets = options.markets.replace('[','').replace(']','').split(',')

  const productsData = markets.map(market => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await searchInPage(market, searchKey)
        const response = {
          marketName: market,
          products: data
        }
        resolve(response)
      } catch (error) {
        const response = {
          marketName: market,
          error: error
        }
        reject(response)
      }
    }) 
  })
  
  const results = await Promise.allSettled(productsData)
  console.log(results)
  let response = {
    error: false,
    results: results.map(response => response.value)
    
  }
  response.totalResults = response.results.length > 1 ? reduce((prev, curr) => {
    return prev.products.length + curr.products.length
  }) : response.results[0].products.length
  
  return response
};


module.exports = { searchProducts }