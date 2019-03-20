'use strict'
const Boom = require('boom')
const path = require('path')

let config = {}
const Pack = require('./../../package')

config.web = {
  name: Pack.name,
  swagger: {
    host: 'localhost:9002',
    schemes: ['http']
  },
  connection: {
    port: process.env.CMS_ADMIN_PORT || 9002,
    router: {
      isCaseSensitive: false,
      stripTrailingSlash: true
    },
    routes: {
      cors: {
        origin: ['*'],
        credentials: true
      }
    }
  },
  db: {
    uri: 'mongodb://127.0.0.1:27017/db_demo_local'
  },
  redisOptions: {
    host: '127.0.0.1', // 13.228.4.248
    port: 6379,
    detect_buffers: true,
    prefix: Pack.name + ':'
  }
}

module.exports = config
