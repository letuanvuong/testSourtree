import GiangDuongController from '../controller/index.js'
import GiangDuongVal from '../validate/index.js'

export default [{
    method: 'POST',
    path: '/giangduong',
    handler: GiangDuongController.save,
    config: {
        validate: GiangDuongVal.save,
        tags: ['api'],
        plugins: {
            'hapi-swagger': {
                responses: { '400': { 'description': 'Bad Request' } },
                payloadType: 'json'
            }
        }
    }
},
{
    method: 'GET',
    path: '/get-giangduong',
    handler: GiangDuongController.get,
    config: {
        tags: ['api'],
        plugins: {
            'hapi-swagger': {
                responses: { '400': { 'description': 'Bad Request' } },
                payloadType: 'json'
            }
        }
    }
},
{
    method: 'GET',
    path: '/image/{img}',
    handler: function (request, h) {
        try {
            return h.file('app/lib/img/' + request.params.img);
        } catch (err) {
        }
    }
}


]
