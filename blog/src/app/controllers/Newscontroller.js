 // cấu hình controller 
 class NewsController {

    // [GET] /news
    index(req,res){
        res.render('news');
    }
     
    // [GET] /:slug 
    show(req, res){
        res.send('SHOW DETAIL !!!!')
    }
 }

 module.exports = new NewsController; //module.exports là để xuất ra ngoài // new NewsController là để tạo một đối tượng mới

//  const newController = require('./NewsController'); //nhận cái new NewsController mới đc xuất ra ngoài bởi module.exports ./NewsController là đường dẫn đến file chứa module.export