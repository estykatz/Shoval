
const getList=async()=>{
    try{
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
        dbConfig.connect().then(() => {//function (err) {
            console.log('connected');
            dbConfig.query("select * from Student"),

                (err) => {
                    if (err) console.log(err)
                };
        });
    }
    catch {

    }
}