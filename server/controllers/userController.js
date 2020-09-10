// const usersService = require('../services/UsersService');
//const { connection } = require('..Service/services/Service');
let connection = require('../services/Service');
const { request } = require('express');
let myConnect = new connection().connection;
const getUser = async (req, res) => {
    try {
        return res.status(200).json({ "userName": "Tamar" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

function AddUser(UserName, Password, email) {
    let c = myConnect.connection;
    console.log(c);

    myConnect.connect(function (error) {
        if (error) {
            console.log("Error while connecting to database")
        }
        else {
            console.log('connected')
        }
    });
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