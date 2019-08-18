var express=require('express');
var mysql=require('mysql');
const bodyparser = require('body-parser');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');    //有关文件时使用

// var router1=require('./server/router/admin')
// var router2=require('./server/router/pages')
// var router3=require('./server/router/user')
var app=express();

//跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://xueqian:3000');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Authorization,Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})


let host = 'http://xueqian:2000/';
console.log(__dirname);
//图片上传存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '-' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop())
    }
});
const upload = multer({ storage: storage });



// 接受上传的图片
app.post('/uploads', upload.single('images'), function (req, res, next) {
    console.log(req.file);
    res.json({ imgsrc: host + 'uploads/' + req.file.filename });
});

//编辑器上传图片接口
app.post('/uploadimgs', upload.array('myimgs'), function (req, res, next) {
    let r = {
        "errno": 0,
        "data": []
    };
    console.log(req.files);
    for (let ind = 0; ind < req.files.length; ind++) {
        const e = host + 'uploads/' + req.files[ind].filename;
        r.data.push(e);
    }
    res.json(r);
});


// 数据库连接
global.mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'redm',
    port: 3306
});
mydb.connect();


//启用bodyparser
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


// 启用cookie
let secret = 'app.h5190304.com';
app.use(cookieParser(secret));
// 启用session
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))


app.use('/admin',require('./server/router/admin')); 
app.use('/pages',require('./server/router/pages'));  
app.use('/user',require('./server/router/user'));     
 

//对图片资源进行静态托管
app.use('/uploads', express.static('uploads'))
app.listen(2000,()=>{
    console.log('server is running')
})