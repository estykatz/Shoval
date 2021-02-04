const sql = require("mssql");

const createCourse = async (course) => {
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
                dateStart: course.DateStart,
                dateFinish: course.DateFinish,
                day: course.Day,
                hour: course.Hour,
                price: course.price,
                level: course.Level
            };
            let dateStart = post['dateStart'];
            let dateFinish = post['dateFinish'];
            let day = post['day'];
            let hour = post['hour'];
            let price = post['price'];
            let level = post['level'];
            console.log(dateStart);
            console.log(dateFinish);
            //  let req= new sql.Request();
            //"insert into Users values('rrr','11','fff',0)"
            //`insert into Users values(${user.userName},${user.password},${user.email},${user.userAdmin})
            dbConfig.query("insert into Course values('" + dateStart + "','" + dateFinish + "',N'" + day + "','" + hour + "','" + price + "','" + level + "')",
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

module.exports = {
    createCourse
}