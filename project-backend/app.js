import Hapi from 'hapi'
import Path from 'path'
import _ from 'lodash'
import {loader} from './app/bootstrap/bootstrap.js'

process.env.NODE_CONFIG_DIR = Path.join(__dirname, '/app/config')
global.CONFIG = require('config')
var options = _.cloneDeep(global.CONFIG.get('web.connection'))

const server = Hapi.server(options)

// Start the server
server.liftOff = async () => {
  try {
    // registering hapi plugins and bootstrap app
    await loader(server)
    await server.start()
    console.log('Server started at: ' + server.info.uri)
  } catch (err) {
    console.log('ERROR: ', err)
    process.exit(1)
  }
}
server.liftOff()