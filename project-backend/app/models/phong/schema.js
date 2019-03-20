import {Schema} from 'mongoose'

const schema = {
  tenPhong: String,
  sucChua: Number,
  thietBis: [{
    item: {
      type: Schema.ObjectId,
      ref: 'ThietBi'
    },
    soLuong: Number,
    tinhTrang: String,
    ghiChu: String
  }],
  giangDuong: {
    type: Schema.ObjectId,
    ref: 'GiangDuong'
  },
  hinhAnhs: [String],
  trangThai: {
    type: String,
    enum: ['hoatDong', 'khongHoatDong', 'suaChua'],
    default: 'hoatDong'
  }
}

const options = {
  collection: 'phongs',
  timestamps: true
}

export {schema, options}