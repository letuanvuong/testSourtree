'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const PhongSchema = new Schema(schema, options)

export default mongoose.model('Phong', PhongSchema)