'use strict'

import Joi from 'joi'
const GiangDuongVal = {
    save: {
        payload:{
            name: Joi.string().required(),
            floor: Joi.number().required(),
            image: Joi.string().required()
        }
    }
}
export default GiangDuongVal