import Controller from '../controller/index.js'
import Validate from '../validate/index.js'

export default [
  {
    method: 'GET',
    path: '/phong',
    handler: Controller.save,
    config: {
      // validate: Validate.save,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad Request' } }
        }
      }
    }
  }, {
    method: 'GET',
    path: '/get-phongs',
    handler: Controller.get,
    config: {
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad Request' } },
          payloadType: 'json'
        }
      }
    }
  }
]
