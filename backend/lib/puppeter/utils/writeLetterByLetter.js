module.exports = (PageInstanse, word) => {
  word.split('').forEach(async function(letter) {
    await PageInstanse.keyboard.press(letter.toLowerCase())
  })
}