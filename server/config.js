// 설정값을 가지고 있는 모듈
module.exports = {
    server_port: 3000 || process.env.PORT,
    route_info: [{
            file: './test',
            path: '/process/testpost',
            method: 'testpost',
            type: 'post'
        },
        {
            file: './test',
            path: '/process/testget',
            method: 'testget',
            type: 'get'
        }
    ]
};