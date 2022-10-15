 // cấu hình controller 
 const Course = require('../models/Course')
 const { mutipleMongooseToObject } = require('../../util/mongoose')
 class SiteController {

    // [GET] /
    index(req,res, next){
        // Course.find({},function(err, Courses){
        //     if(!err){
        //         res.json(Courses)
        //     }
        //     else{
        //         res.staus(400).json({error: 'ERROR!!!!'})
        //     }// nếu không có lỗi thì sẽ hiện thì ra object Courses nếu không thì sẽ hiện ra object {error: 'ERROR!!!!'}
            
        // }); //đoạn mã này viết dứơi dạng callback
        // res.render('home');
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject()) // chuyển object construction trong db sang object đơn giản trong js
                res.render('home', {
                //title:'khánh đẹp trai'
                courses: mutipleMongooseToObject(courses) // truyền data vào trang home
                })
            })
            .catch(error => next(error)); 
            //cách viết promise
    }

     
    // [GET] /search 
    search(req, res){
        res.render('search');
    }
 }

 module.exports = new SiteController; //module.exports là để xuất ra ngoài // new NewsController là để tạo một đối tượng mới

//  const newController = require('./NewsController'); //nhận cái new NewsController mới đc xuất ra ngoài bởi module.exports ./NewsController là đường dẫn đến file chứa module.export