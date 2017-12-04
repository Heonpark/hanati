// testing post
// var testpost = function(req, res) {
//     console.log('post test호출');
//     res.send({
//         message: `노드서버로부터 ~ ${req.body.text1},${req.body.text2},${req.body.text3},${req.body.text4},${req.body.text5},${req.body.text6} 전달받음`
//     })
// };

var testpost = function(req, res) {
    console.log('/process/testpost호출됨.');
    var cus_age = req.body.cus_age || req.query.cus_age;
    var cus_sex = req.body.cus_sex || req.query.cus_sex;
    var repayment = req.body.repayment || req.query.repayment;
    var repayment_money = req.body.repayment_money || req.query.repayment_money;
    var cus_salary = req.body.cus_salary || req.query.cus_salary;
    var cus_loan = req.body.cus_loan || req.query.cus_loan;
    var leasing_mortgage = req.body.leasing_mortgage || req.query.leasing_mortgage;
    var month_loan_period = req.body.month_loan_period || req.query.month_loan_period;
    var bank_id = req.body.bank_id || req.query.bank_id;
    // num1 = num1 * 1;
    // num2 = num2 * 1;
    // num3 = num3 * 1;
    console.log('parameter : %s, %s, %s, %s,%s,%s,%s,%s,%s', cus_age, cus_sex, repayment, repayment_money, cus_salary, cus_loan, leasing_mortgage, month_loan_period, bank_id);

    var database = req.app.get('database');
    if (database) {
        addUser(database, cus_age, cus_sex, repayment, repayment_money, cus_salary, cus_loan, leasing_mortgage, month_loan_period, bank_id, function(err, result) {
            // 데이터 삽입 중 에러 발생 시 처리
            if (err) {
                console.error('사용자 추가 중 에러 발생' + err.stack);
                res.writeHead(200, {
                    "Content-Type": 'text/html;charset=utf8'
                });
                res.write('<h2>사용자 추가 중 에러 발생</h2>');
                res.end();
            } // 에러 처리

            // result가 있음 : 정상적으로 데이터가 들어감.
            if (result) {
                console.dir(result);
                console.log('사용자 정보 추가 성공');
                res.send('사용자 정보 추가 성공');
            } else {
                res.writeHead(200, {
                    "Content-Type": 'text/html;charset=utf8'
                });
                res.write('<h1>사용자 정보 추가 실패</h1>');
                res.end();
            }
        });

    } else {
        res.writeHead(200, {
            "Content-Type": 'text/html;charset=utf8'
        });
        res.write('<h1>데이터베이스 연결 실패</h1>');
        res.write('<div><p>DB에 연결하지 못했습니다.</p></div>');
        res.end();
    }

}

var addUser = function(database, cus_age, cus_sex, repayment, repayment_money, cus_salary, cus_loan, leasing_mortgage, month_loan_period, bank_id, callback) {
    console.log('addUser호출됨');
    database.getConnection(function(err, conn) {
        if (err) {
            console.log('DB연결 중 오류발생');
            if (conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결 Thread');

        var data = {
            cus_age: cus_age,
            cus_sex: cus_sex,
            repayment: repayment,
            repayment_money: repayment_money,
            cus_salary: cus_salary,
            cus_loan: cus_loan,
            leasing_mortgage: leasing_mortgage,
            month_loan_period: month_loan_period,
            bank_id: bank_id

        }
        var exec = conn.query('insert into customer_info set ?', data, function(err, result) { // set : 모든 컬럼에 data를 삽입, ?는 데이터로 대응

            conn.release();
            console.log('실행 대상 SQL : ' + exec.sql);

            if (err) {
                console.log('SQL 수행 중 에러 발생함.');
                console.dir(err);


                callback(err, null);
                return;
            }
            // err가 없을 경우
            callback(null, result); // result는 router에 등록되어있는 callback함수로 전달
        });

        // conn이 잘 들어왔을 경우
        conn.on('error', function(err) {
            console.log('데이터베이스 연결 시 에러 발생함.');
            console.dir(err);

            callback(err, null);

        });

    });

}

// testing 

var testget = function(req, res) {
    console.log('get test호출');
    res.send({
        message: `Hello! Have fun!`
    })
};

module.exports.testpost = testpost;
module.exports.testget = testget;