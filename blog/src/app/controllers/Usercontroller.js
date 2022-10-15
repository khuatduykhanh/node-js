const User = require('../models/username')

// cấu hình controller 
 class UserController {

    // [GET] /user/login
    login(req,res){
        res.render('user/login');
    }
     
    // [GET] /user/registration
    registration(req,res){
        res.render('user/registration');
    }
    store(req, res){
        // res.json(req.body)
        
        const user = new User(req.body);
        user.save() // lưu giữ liệu vừa nhập vào databas giữ liệu ghi vào phải cùng vs form trong models
             .then(() => res.redirect(`/user/login`)) // .redirect('/') chuyển hướng trang web đến url '/'
             .catch(error =>{
 
             });     
        
      }
    
 }

 module.exports = new UserController; //module.exports là để xuất ra ngoài // new NewsController là để tạo một đối tượng mới

//  const newController = require('./NewsController'); //nhận cái new NewsController mới đc xuất ra ngoài bởi module.exports ./NewsController là đường dẫn đến file chứa module.export