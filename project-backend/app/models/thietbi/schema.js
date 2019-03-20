import {Schema} from 'mongoose'

const schema = {
  loaiTB: String,
  tenThietBi: String,
  hinhAnhs: [String]
}

const options = {
  collection: 'thietbis',
  timestamps: true
}

export {schema, options}