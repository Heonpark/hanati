var route_loader = {};

// 모듈에서 직접 config 파일 불러오기 - 상위 폴더에 config.js가 있기 때문에 ../config 사용
var config = require('../config');

route_loader.init = function(app, router) {
    console.log('route_loader.init 호출됨.');
    return initRoutes(app, router);
}

function initRoutes(app, router, upload) {
    var infoLen = config.route_info.length;
    console.log('설정에 정의된 라우팅 모듈의 수 : %d', infoLen);

    for (var i = 0; i < infoLen; i++) {
        var curItem = config.route_info[i];

        // 모듈 파일에서 모듈 불러옴
        var curModule = require(curItem.file);
        console.log('%s 파일에서 모듈정보를 읽어옴.', curItem.file);

        // 라우팅 처리
        if (curItem.type == 'get') {
            router.route(curItem.path).get(curModule[curItem.method]);
        } else {
            router.route(curItem.path).post(curModule[curItem.method]);
        }

        console.log('라우팅 모듈 [%s]이(가) 설정됨', curItem.method);
    }

    // 라우터 객체 등록
    app.use('/', router);
}

module.exports = route_loader;