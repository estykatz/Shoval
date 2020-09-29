const sql = require("mssql");

const createUser = async (user) => {
    try {
        let sql = require("mssql/msnodesqlv8");
        let dbConfig = new sql.ConnectionPool({
            driver: "msnodesqlv8",
            server: 'localhost', 
            database: 'ShovalSwimmingCourses' ,
            "options": {
                "encrypt": false,
                "enableArithAbort": true,
                trustedConnection: true,
                useUTC: true
                },
            });
           // let conn = new sql.Connection(dbConfig);
            dbConfig.connect().then(()=>{//function (err) {
                
                console.log('connected');
                // let post={
                //     userName:user.userName,
                //     password:user.password,
                //     email:user.email,
                //     userAdmin:user.userAdmin
                // };               
                // console.log(post);
              //  let req= new sql.Request();
                dbConfig.query(`insert into Users values(${user.userName},${user.password},${user.email},${user.userAdmin})`,
                 (err)=> {
                    if (err) console.log(err)
                  //  res.send(recordset);
                } );
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

module.exports = {
   createUser
}