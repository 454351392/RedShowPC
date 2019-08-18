
//封装方法
function conentMysql1(sql, callback, data=[]) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'redm',
        multipleStatements:true
    });

    connection.connect();
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });

    connection.end();
}


module.exports = conentMysql1;