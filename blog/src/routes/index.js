
const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const userRouter = require('./user');



function route(app){
    // app.get('/', (req, res) => { // app.get để xử lý lấy thông tin từ sever, '/' truy cập vào router '/',
    //     //nếu là '/tin-tuc' thì khi chúng ta truy cập thì sẽ đổi là localhost:3000/tin-tuc
    //     // res.send('<h1 style="color:red">hello world </h1>') //res.send trả về trình duyệt hello world
    //     res.render('home'); //render home nó sẽ lấy cái file home đưa vào thẻ body trong file main
    // });

    // app.get('/news', (req,res) =>{
    //     // console.log(req.query.q); // cách lấy dữ liệu từ query paramters tại trang news khi form có action là news
  
    //     res.render('news'); //render news nó sẽ lấy cái file news đưa vào thẻ body trong file main
    // });

    app.use('/news', newRouter);

    app.use('/user', userRouter);

    app.use('/me', meRouter);

    app.use('/course', courseRouter);

    app.use('/', siteRouter);


    // app.get('/search', (req,res) =>{
    //     // console.log(req.query.q); //cách lấy dữ liệu từ query parameters
  
    //     res.render('search'); //render search nó sẽ lấy cái file search đưa vào thẻ body trong file main
    // });

    // app.post('/search', (req,res) =>{ // định nghĩa một tuyến đường sẽ đc post lên sever
    //     console.log(req.body);//trả về một object mà chúng ta vừa nhập ở form với phương thức post
  
    //     res.send(''); //trả về một chuỗi rỗng
    // });
}

module.exports = route;