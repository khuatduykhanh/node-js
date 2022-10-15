const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/store/course
    storeCourse(req, res, next){
        // Course.find({})
        //     .then(courses=>res.render('me/store-course',{ courses:  mutipleMongooseToObject(courses)}) )
        //     .catch(next)

        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => console.log(deleteCount))
        //     .catch(() =>{}) 
        // làm như cách này chỉ lấy được số document bị xoá mà k chuyển sang file me/store-course
        //  h gộp hai cái này vào một 
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => res.render('me/store-course',
            {
                deleteCount,
                courses:  mutipleMongooseToObject(courses)
            }))
    }
    // [Get] /me/deleted/course
    deletedCourse(req, res, next){
        Course.findDeleted({})
            .then(courses=>res.render('me/deleted-course',{ courses:  mutipleMongooseToObject(courses)}) )
            .catch(next)
    }
    
    
}
 
module.exports = new MeController;