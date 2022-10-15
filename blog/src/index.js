const express = require('express') //khai báo express
const path = require('path');
const morgan = require('morgan') //khai báo morgan
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const expressValidator =  require('express-validator');
const flash = require('connect-flash');
const handlebars = require('express-handlebars'); // khai bao thu vien handlebars
const methodOverride = require('method-override'); //thư viện này giúp chúng ta có thể thêm phương thức PUT vào form
const app = express() // gán các function trong thư viện express cho app
const port = 3000 // gán cổng 3000 cho port

const route = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //express.stactic khai báo file public là file tĩnh 
// public/img/anh-4.jpg tương ứng vs localhost:3000/img/anh-4.jpg để truy cập đc vào ảnh

// app.use(express.urlencoded({
//     extended: true
//   })); //middleware này giúp sử lý dữ liệu từ form html submit lên sever
// app.use(express.json()) // middleware này giúp sử lý dữ liệu gửi lên từ file js hoặc một số thư viện của js như XMLhttprequest fetch axios bằng cả 2 phương thức get và post

// middleware bodyparse giúp gửi được form lên sever req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middleware cookie parser
app.use(cookieParser('khanhdepzai'));

// middleware express-session
app.use(session({
  secret : "khanhdepzai",
  saveUninitialized: true,
  resave: true
}))

// cấu hình passport
app.use(passport.initialize());
app.use(passport.session());

//cấu hình express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
// use flash
app.use(flash());
app.use(function (req,res,next) {
  res.locals.messages = req.session.flash;
  delete req.session.flash;
  next()
})

// middleware methodOverride
app.use(methodOverride('_method'))

// template engine
app.engine('hbs', handlebars({
    extname:'.hbs',
    helpers: {
      sum: (a,b) => a+b,    // định nghĩa một phép cộng trong handlebars
  }
})); //đổi đuôi của file .handlebars thành .hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // đi vào views bằng cách đi qua resources

//sử dụng morgan để debug xem trình duyệt đã gửi lên sever chưa
// app.use(morgan('combined')) 
// set up express-session

// router 
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
  })
  