// định nghĩa kiểu dữ liệu trong mongodb compass
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete'); // thư viện này giúp có thể xoá mềm 
const slug = require('mongoose-slug-generator'); // thư viện này là để tự động thêm slug
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String,maxLength: 600},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    level: {type: String, required: true},
    slug: { type: String, slug: 'name', unique: true } // unique để cho 2 cái slug không được giống nhau
  }, {
      timestamps:true, // để hiện thi thời gian tạo file và up file
  });

mongoose.plugin(slug);  
Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt : true,
 });


module.exports = mongoose.model('Course', Course);