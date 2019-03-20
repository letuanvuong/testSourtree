const schema = {
  ten: String,
  soTang: Number,
  avatar: String,
  hinhAnhs: [String],
  moTa: String
}

const options = {
  collection: 'giangduongs',
  timestamps: true
}

export {schema, options}