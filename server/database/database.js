var mysql = require('mysql');

var database = {};

database.init = function(app) {
    console.log('database.init 호출됨');
    connect(app);
}

function connect(app) {
    console.log('connect() 호출됨');
    var connection = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: '3306',
        database: 'project',
        debug: false
    });
    test_open(app, connection);
    app.set('database', connection);
    console.log('database 객체가 app 객체의 속성으로 추가됨');
}

function test_open(arr, con) {
    con.getConnection(function(err) {
        if (err) {
            console.log('mysql 연결 실패: ' + err);
        } else {
            console.log('mysql 연결 성공');
        }
    })
}

module.exports = database;