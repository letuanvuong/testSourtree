'use strict'
import mongoosePaginate from 'mongoose-paginate'
import mongoose from 'mongoose'

exports.register = async function (server, options) {
  await mongoose.connect(global.CONFIG.get('web.db.uri'), {useNewUrlParser: true})
  mongoose.set('useCreateIndex', true)
  mongoose.plugin(mongoosePaginate)
  console.log('Register Mongo:', global.CONFIG.get('web.db.uri'))
}

exports.name = 'app-mongo'