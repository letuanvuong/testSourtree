'use strict'
export const loader = async function (server) {
  const Pack = require('./../../package')
  await server.register([
    {
      plugin: require('inert')
    },
    {
      plugin: require('vision')
    },
    {
      plugin: require('hapi-swagger'), // inert, vision dependency
      options: {
        host: global.CONFIG.get('web.swagger.host'),
        schemes: global.CONFIG.get('web.swagger.schemes'),
        info: {
          title: 'Documentation',
          version: Pack.version
        }
      }
    },
    {
      plugin: require('../lib/mongo.js'),
      
      
    }
  ])
    .then(async (err) => {
      if (err) {
        console.log(err)
      }
      /* Load models */
      require('@models/giangduong/model.js')
      require('@models/phong/model.js')

      /* Load Modules */
      let modules = []
      modules.push(require('@modules/admin/giangduong'))
      modules.push(require('@modules/admin/phong'))

      if (modules.length) {
        let options = {}
        options.routes = { prefix: '/api/v1' }
        await server.register(modules, options, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      // console.log(server)
    })
}
