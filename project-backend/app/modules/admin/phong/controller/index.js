import mongoose from 'mongoose'

const Phong = mongoose.model('Phong')

const save = async (request, h) => {
    try {
        // console.log('request:', request)
        let data = request.query
        let item = {}
        if (!data._id) {
            item = new Phong(data)
        } else {
            item = await Phong.findById(data._id)
            item = Object.assign(item, data)
        }
        return await item.save()
    } catch (error) {
        throw (error)
    }
}

const get = async (request, h) =>{
    return await Phong.find()
}

export default { save, get }