var express = require('express');

var router = express.Router();

var mysql = require('mysql');

router.post('/save-que/:ans', function (req, res, next) {
    console.log('req recived');
    //1.take data from req
    var type = req.query.type;
    var ans = req.params.ans;
    var o1 = req.body.opt1;
    var o2 = req.body.opt2;
    var o3 = req.body.opt3;
    var o4 = req.body.opt4;
    var que = req.headers.que;
    //2.establish the connection with DB
    var con = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'school',
    });

    con.connection(function (err, succ) {
        if (err) {
            //4. send res back to client
            res.send('db con error');
        } else {
            //3. perform required operation
            var q = "INSERT INTO `questions`(`que`, `opt1`, `opt2`, `opt3`, `opt4`, `ans`, `type`) VALUES ('" + que + "','" + o1 + "'," + o2 + "','" + o3 + "','" + o4 + "','" + ans + "','" + type + "')"
            con.query(q, function (e, s) {
                //4. send res back to client
                if (e) {
                    res.send(e);
                } else {
                    res.send(s);
                }
            })
        }
    })








})

router.get('/get-que', function (req, res, next) {

    //1. take data from req


    //2. establish the connection with DB

    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: '',
        database: 'school'
    })
    con.connect(function (err, succ) {
        if (err) {
            //4. send res back to client
            res.send('db can error');
        } else {
            //3. perform required operation
            var q = "select *from questions";
            con.query(q, function (e, r) {
                //4. send res back to client
                if (e) {
                    res.send(e);
                } else {
                    res.send(r);
                }
            })
        }
    })


})

router.get('/get-que-test', function (req, res, next) {

    var con = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'school'
    })

    con.connect(function (err, succ) {
        if (err) {
            res.send('db can error');
        } else {
            var q = 'SELECT * FROM `questions` ORDER BY RAND() LIMIT 5';
            con.query(q, function (e, s) {
                if (e) {
                    res.send(e);
                } else {
                    res.send(s);
                }
            })
        }
    })
})

module.exports = router;