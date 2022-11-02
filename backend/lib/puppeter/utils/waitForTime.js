module.exports = function(options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), options?.time || 3000)
  })
}