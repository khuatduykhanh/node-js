// định nghĩa kiểu dữ liệu trong mongodb compass
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

    username: {type: String, required: true},
    name: {type: String,},
    email:{type:String,required: true},
    password: {type: String,maxLength: 30,required: true},
    
  }, {
      timestamps:true, // để hiện thi thời gian tạo file và up file
  });



module.exports = mongoose.model('User', User);