const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /course/slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => res.render('courses/show', { course: mongooseToObject(course) }))
            .catch(next)
    }
    // [GET] /course/create
    create(req, res, next){
       res.render('courses/create')
   
    }
    // [POST] /course/store
    store(req, res){
       // res.json(req.body)
       const formData = req.body;
       formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`; 
       const course = new Course(formData);
       course.save() // lưu giữ liệu vừa nhập vào databas giữ liệu ghi vào phải cùng vs form trong models
            .then(() => res.redirect(`/me/store/course`)) // .redirect('/') chuyển hướng trang web đến url '/'
            .catch(error =>{

            });     
       
     }
       // [GET]/course/:id/edit
     edit(req, res, next){
        Course.findOne({_id: req.params.id})
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(next)
    }
     // [PUT] /course/id
     update(req, res, next){
         Course.updateOne({_id: req.params.id}, req.body)
             .then(() => res.redirect('/me/store/course'))
             .catch(next)
    }
    // [DELETE] /course/id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
   }
    // [DELETE] /course/id/force
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
   // [PATCH] /course/id/restore
   restore(req, res, next){
    Course.restore({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
   }
  
}
 
module.exports = new CourseController;