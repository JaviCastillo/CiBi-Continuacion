// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Verificar: Carga pagina principal': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('button')
      .assert.containsText('h1', 'Cinema Billboard')
      .assert.elementCount('img', 1)
      .end()
  },

  'Verificar: Google no acepta Login en modo debug': browser => {

    browser
      .init()
      .waitForElementVisible('#app')
      .waitForElementVisible('button')
      .click('button')
    
      browser
        .windowHandles(res => { 
          browser.switchWindow( res.value[1]) 
        })
        .waitForElementVisible('h1')
        .waitForElementVisible('input[type=email]')
        .setValue('input[type=email]', 'jcastillo.ejecutivowom')
        .click('#identifierNext')
        .waitForElementVisible('h1')
        .assert.containsText('h1', "No se pudo acceder")
        .end()
  },
}
