'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const GiangDuongSchema = new Schema(schema, options)

export default mongoose.model('GiangDuong', GiangDuongSchema)