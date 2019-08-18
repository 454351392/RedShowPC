var express = require('express');
var sqlConnect = require('../sqltool/mysqltool')
var pagesRouter = express.Router();

// pagesRouter.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type')
//     next();
// }) 




//************************************ */前台页面操作************************************************
//首页---展示
pagesRouter.post('/showgoods', (req, res) => {
    var sql = `select * from goods`;
    if(req.body.kw=='推荐'||null){
    sql+=` where 1`
    }
    let p=req.body;
    if(req.body.kw&&req.body.kw!='推荐'){
        sql+=` where gchooose=?`;
    }
    let pdata = [p.kw];     
    sqlConnect(sql, function (data) {
        res.send(data);                            
    },pdata)
})



          

//前台---商品详情接口
pagesRouter.get('/xiangqing', (req, res) => {
    console.log(req.query.kw1)
    sql = `select * from goods where gid="${req.query.kw1}";UPDATE goods SET gnums = gnums+1 where gid=${req.query.kw1};`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            // console.log(data[0])
            res.send(data[0]);

        })
    }
})


//前台---搜索框接口
pagesRouter.post('/kwsearch', (req, res) => {
    console.log(req.body.keyw1)
    var sql9 = "select * from goods where 1";         
    if (req.body.keyw1) {
        sql9 += " and gtitle like '%" + req.body.keyw1 + "%' or gchooose like '%" + req.body.keyw1 + "%' or gcx like '%" + req.body.keyw1 + "%' or username like '%" + req.body.keyw1 + "%'";
    } 
    sqlConnect(sql9, function (data) {
        // console.log(data);
        res.send(data);
    })

})




//前台---个人接口
pagesRouter.post('/geren', (req, res) => {
    sql = `select * from goods where uid="${req.body.uid}"`
        sqlConnect(sql, function (data) {
            console.log('=========================')
            // console.log(data[0])
            res.send(data);

        })
    
})







//前台---品种详情
pagesRouter.get('/pzxiangqing', (req, res) => {
    sql = `select * from catclass where id="${req.query.kw1}"`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            // console.log(data)
            res.send(data[0]);

        })
    }
})



//前台关于我们联系我们接口
pagesRouter.get('/contatus', (req, res) => {
    var sql = `select * from contactus`;
    sqlConnect(sql, function (data) {
        res.send(data);
    })
})


//选猫知识-前台接口
// pagesRouter.post('/catknowledges', (req, res) => {
//     var sql11 = `select * from knowledge where state=1`;
//     sqlConnect(sql11, function (data) {
//         console.log('=========================')
//         // console.log(data)
//         res.send(data);
//     })
// })



//选猫知识详情-前台接口
pagesRouter.get('/catkwinfo', (req, res) => {
    var sql11 = `select * from knowledge where id=${req.query.id};UPDATE knowledge SET number = number+1 where id=${req.query.id}`;
    sqlConnect(sql11, function (data) {
        console.log('=========================')
        // console.log(data)
        res.send(data[0]);
    })
})



//  获取选猫知识列表信息
pagesRouter.get('/catknowledges', (req, res) => {
    // *最好写成具体的字段
    // 每页显示多少条信息
    let pagenum = 7;
    let page = req.query.page ? req.query.page : 1;
    // let keywords = req.query.keywords ? req.query.keywords : '';
    // let where = '';
    // if(keywords){
    //     where = ' AND bookname LIKE "%'+keywords+'%"';
    // }
    // let sql = 'SELECT COUNT(*) AS totalnum FROM knowledge WHERE state=1 '+where+';SELECT * FROM knowledge WHERE state = 1 '+where+' LIMIT ?, ?';
    let sql = `SELECT COUNT(*) AS totalnum FROM knowledge WHERE state=1;SELECT * FROM knowledge WHERE state = 1 LIMIT ?, ?`;
    console.log(sql);
    mydb.query(sql, [pagenum * (page - 1), pagenum], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        let totpage = Math.ceil(result[0][0].totalnum / pagenum);   //总页数
        // console.log(result)
        // 对数据进行处理
        res.json({ 
            catkwlist: result[1],               //每页返回的数据
            totalpage: totpage                  //总页数
        });
    });
});


pagesRouter.get('/showtype', (req, res) => {
    var sql2 = `select distinct(class1) from goods where 1 `;
    console.log(sql2);
    
    if (req.query.kw2=="类型"){
        console.log(22222)
        sqlConnect(sql2, function (data) {
            console.log(data)
            res.send(data);
        })
    }
})








module.exports = pagesRouter;