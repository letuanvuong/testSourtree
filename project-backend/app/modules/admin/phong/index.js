import Routes from './routes/index.js'

exports.register = async(server, option) =>{

  server.route(Routes)
}

exports.name = 'admin-phong'