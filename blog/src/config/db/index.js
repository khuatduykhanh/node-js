// kết nối dữ liệu với mongodb compass
const mongoose = require('mongoose'); 

async function connect(){ // có await nên function phải thêm async
   try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
   });
        console.log('connect successfully!!!');
   } catch (error) {
       console.log('connect failure!!!!');
       
   }
}

module.exports = { connect };