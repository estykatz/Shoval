const sql = require("mssql");

const createUser = async (user) => {
    try {
        let sql = require("mssql/msnodesqlv8");
        let dbConfig = new sql.ConnectionPool({
            driver: "msnodesqlv8",
            server: 'localhost',
            database: 'ShovalSwimmingCourses',
            "options": {
                "encrypt": false,
                "enableArithAbort": true,
                trustedConnection: true,
                useUTC: true
            },
        });
        // let conn = new sql.Connection(dbConfig);
        dbConfig.connect().then(() => {//function (err) {

            console.log('connected');
            let post = {
                userName: user.userName,
                password: user.password,
                email: user.email,
                userAdmin: user.userAdmin
            };
            let name = post['userName'];
            let pass = post['password'];
            let email = post['email'];
            let usera = post['userAdmin'];
            // console.log(post);
            //  let req= new sql.Request();
            //"insert into Users values('rrr','11','fff',0)"
            //`insert into Users values(${user.userName},${user.password},${user.email},${user.userAdmin})
            dbConfig.query("insert into Users values(N'" + name + "','" + pass + "','" + email + "','" + usera + "')",
                (err) => {
                    if (err) console.log(err)
                    //  res.send(recordset);
                });
        });
        //     var insertToSql = `insert into Users values(${user.userName},${user.password},${user.email},${user.userAdmin})`;
        //    console.log('success');
        //     conn.query(insertToSql, function (err) {
        //         if (err) { return false; }
        //         return sql;
        //     })  });
        // });
    }

    catch (error) {
        console.log(error);
    }
}
const checkIfTheRightUser = async (user) => {
    try {
        let sql = require("mssql/msnodesqlv8");
        let dbConfig = new sql.ConnectionPool({
            driver: "msnodesqlv8",
            server: 'localhost',
            database: 'ShovalSwimmingCourses',
            "options": {
                "encrypt": false,
                "enableArithAbort": true,
                trustedConnection: true,
                useUTC: true
            },
        });
        console.log('connected');
        let post = {
            userName: user.userName,
            password: user.password,
        };
        let name = post['userName'];
        let pass = post['password'];
        let connection = await dbConfig.connect()//.then(() => {
        let rightpass =await connection.request().query("select * from Users where UserName=N'" + name + "'and password=N'" + pass + "'")
        console.log(rightpass.recordset.length);
        // console.log(rightpass.recordset.length);
        // let a=rightpass.recordset.length;
        // console.log(a);
        // Number(a);
        if(rightpass.recordset.length>0)
        {
            return true;
        }
        
        return false;
        // if (rightpass.recordset.length!=0) {
           
        // }
        // if(rightpass.recordset.length==0) {
        //     console.log("jkjkjkjkjkjk");
        //     return false;
        // }
        // dbConfig.query("select * from Users where UserName=N'" + name + "'and password=N'" + pass + "'",
        //     (err) => {
        //         if (err) {
        //             return false;
        //         }

        //     })

    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    createUser, checkIfTheRightUser
}