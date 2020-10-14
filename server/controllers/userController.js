const usersService = require('../services/userConnectService');
//const { connection } = require('..Service/services/Service');
let Connection = require('../services/userService');


const getUser = async (req, res) => {
    try {
        return res.status(200).json({ "userName": "Tamar" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
 function AddUser(user) {
    // console.log('success');
    // let sql = require("mssql/msnodesqlv8");
    // var con = Connection.connection();
    // con.connect(function (err) {
    //     if (err) throw err;
    //     console.log('connected');
    //     var insertToSql = `insert into Users values(${nu.userName},${nu.password},${nu.email},${nu.userAdmin})`;
    //     con.query(sql, function (err) {
    //         if (err) { return false; }
    //         return sql;
    //     })
   // })
    // let c = myConnect.connection;
    // console.log(c);
      usersService.createUser(user);
    // myConnect.connect(function (error) {
    //     if (error) {
    //         console.log("Error while connecting to database")
    //     }
    //     else {
    //         console.log('connected')
    //     }
    // });
}
//  c.request.query("select * from Student where FirstName='chana'", function (err, recordset) {
//         if (err) console.log(err)
//         res.send(recordset);

// });
//   var request = new connect.sql.Request();
//   request.query("insert into Users values(UserName,Password,email)", function (err, recordset) {


//         if (err) console.log(err)

//         // send records as a response
//         res.send(recordset);

//     });
//};

//req.query("insert into Users values(UserName,Password,email)")


module.exports = {
    getUser, AddUser
}