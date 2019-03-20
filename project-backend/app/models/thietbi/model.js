'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const ThietBiSchema = new Schema(schema, options)

export default mongoose.model('ThietBi', ThietBiSchema)