// const usersService = require('../services/UsersService');
var connect = require('../services/Service');
//const { connection } = require('..Service/services/Service');

const getUser = async (req, res) => {
    try {
        return res.status(200).json({ "userName": "Tamar" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

function AddUser(UserName, Password, email) {
    var sql = require("mssql/msnodesqlv8");
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from Student where FirstName='chana'", function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
    //   var request = new connect.sql.Request();
    //   request.query("insert into Users values(UserName,Password,email)", function (err, recordset) {


    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);

    //     });
    };

    //req.query("insert into Users values(UserName,Password,email)")


    module.exports = {
        getUser,AddUser
    }