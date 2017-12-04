// HanaWorld server
//================== 필 수 모 듈 ===================//
var express = require('express'),
    http = require('http'),
    path = require('path'),
    expressErrorHandler = require('express-error-handler'),
    MySQLStore = require('express-mysql-session'),
    static = require('serve-static'), // public으로 접근가능하도록 
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');
//================== 필 요 모 듈 ===================//
// 설정 모듈(config.js 불러오기)
var config = require('./config');

// 데이터베이스 모듈 불러오기(database.js)
var database = require('./database/database');

// 라우팅 모듈 불러오기(route_loader.js)
var route_loader = require('./routes/route_loader');

//================== 필 수 객 체 ===================//

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('combine'))
app.use(cors());
// 포트설정
console.log('config.server_port : %d', config.server_port);
app.set('port', process.env.PORT || config.server_port);
// public 접근설정
app.use('/public', static(path.join(__dirname, 'public')));

//3) router_loader를 이용한 라우터 초기화
route_loader.init(app, express.Router());
//==============================================//
// error 핸들러 
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
// 서버 실행
http.createServer(app).listen(app.get('port'),
    function() {
        console.log('Express 서버 실행');
        database.init(app);
    })