const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: 'https://www.diluccatogo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(`Soy el console log del task ${message}`)
          return null
        },
      })
    },
  },
  env: {
    urlComfirm: 'https://www.diluccatogo.com/',
    ssl: 'https',
    titleSite: 'Di Lucca To Go - Inicio',
    BannersCount: 4,
    username: 'prueba2@gmail.com',
    password: 'xxxxx1',
    urlFacebook: 'https://www.facebook.com/diluccatogo',
    urlInstagram: 'https://www.instagram.com/di_lucca_togo/',
    favicon:'favicon-32x32.png',
    adress:'calle 46 sur #23a-26',
    neighborhood:'santa lucia',
    find: 'queso',
  },
})
