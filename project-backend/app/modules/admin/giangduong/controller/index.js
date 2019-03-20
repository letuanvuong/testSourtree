'use strict'

import mongoose from 'mongoose'

const GiangDuong = mongoose.model('GiangDuong')

const save = async (request, h) => {
    try {
        // console.log('request:', request)
        let data = request.payload
        let item = {}
        if (!data._id) {
            item = new GiangDuong(data)
        } else {
            item = await GiangDuong.findById(data._id)
            item = Object.assign(item, data)
        }
        return await item.save()
    } catch (error) {
        throw (error)
    }
}

const get = async (request, h) =>{
    return await GiangDuong.find()
}

export default { save, get }