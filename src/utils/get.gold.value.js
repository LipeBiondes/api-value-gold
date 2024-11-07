const puppeteer = require('puppeteer')

const getValueOfGold = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Acessa a página e espera que a rede esteja ociosa
  await page.goto('https://dolarhoje.com/ouro-hoje/', {
    waitUntil: 'networkidle2'
  })

  // Aguarda o seletor do input com o valor aparecer
  await page.waitForSelector('#nacional')

  // Extrai o valor do input com ID "nacional"
  const data = await page.evaluate(() => {
    const element = document.querySelector('#nacional')
    return element ? element.value : null
  })

  await browser.close()

  return data
}

module.exports = getValueOfGold
