const express = require('express').Router();

// function connection(req, res){
   
//     var sql = require("mssql/msnodesqlv8");

//     // config for your database
//     var config = {
//         driver: "msnodesqlv8",
//         server: 'localhost', 
//         database: 'ShovalSwimmingCourses' ,
//         "options": {
//             "encrypt": false,
//             "enableArithAbort": true,
//             trustedConnection: true,
//             useUTC: true
//             },
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query("select * from Student where FirstName='chana'", function (err, recordset) {
        
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//        //request.query("insert  into Student values('476583215','yafa','malach','0548345612','gur',1,54.2,'no','welcome to database')",
//         // function (err, recordset) {
//         //     if (err) console.log(err)

//         //     // send records as a response
//         //    // res.send(recordset);
//         // } );
//     });

    /////////////////////////////////////////////////////////////////////////////////////////////////
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

let connectToSql=function connectToSql() {
    let sql = require("mssql/msnodesqlv8");
   this.connection=(req, res)=>{
    
    
    // config for your database
    let config = {
        driver: "msnodesqlv8",
        server: 'localhost', 
        database: 'ShovalSwimmingCourses' ,
        "options": {
            "encrypt": false,
            "enableArithAbort": true,
            trustedConnection: true,
            useUTC: true
            },
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        let request = new sql.Request();
           
        // query to the database and get the records
        request.query("select * from Student where FirstName='chana'", function (err, recordset) {
        
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
   });
   }
   return connection;
}
module.exports = connectToSql;
    

