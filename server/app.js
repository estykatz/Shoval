const cors = require('cors');
const express = require('express');
const routes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

// require('dotenv').config()


app = express();
port = process.env.PORT || 4000;
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/user', routes);
app.get('/',(req,res)=>{
    const sql=require('mssql');
    var config={
        user:'WINDOWS-J21BCB7\Admin',
        password:'',
        server:'localhost',
        database:'ShovalSwimmingCourses'
    };
    var conn = new sql.Connection(config);
    conn.connect(config, function (err) {
         if (err) console.log(err);
         var request = new sql.Request(conn);
         request.query('select * from Student', function (err, recordset) {
        if(err) console.log(err);
         res.send(recordset);
        sql.close();
         });
     });
   // var req = new sql.Request(conn);
//      conn.connect(function (err) {
//        if (err) {
//            console.log(err);
//            return;
//         }
//         req.query("SELECT * FROM Student", function (err, recordset) {
//            if (err) {
//                console.log(err);
//            }
//            else { 
//                console.log(recordset);
//            }
//            conn.close();
//        });
//  });
});
console.log('todo list RESTful API server started on: ' + port);
