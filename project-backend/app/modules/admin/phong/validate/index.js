import Joi from 'joi'
export default {
  save: {
      payload:{
        tenPhong: Joi.string().description('tenPhong'),
        sucChua: Joi.number().description('sucChua'),
        trangThai: Joi.string().description('trangThai')
      },
      options: {
        allowUnkown: true
      }
  }
}