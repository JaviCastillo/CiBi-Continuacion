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

  'Verificar: Login': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .waitForElementVisible('button')
      .click('button')
      .windowHandles(res => { console.log(res.value) })
      .end()
  },
}
