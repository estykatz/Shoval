
const getDetails = async (Details) => {
    try {
        let sql = require("mssql/msnodesqlv8");
        let post = {
            FirstName: Details.FirstName,
            LastName: Details.Lastname,
            PhoneNumber: Details.PhoneNumber,
        };
        let FirstName = post['FirstName'];
        let LastName = post['LastName'];
        let PhoneNumber = post['PhoneNumber'];
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
        console.log(LastName);
        console.log(FirstName);
        console.log(PhoneNumber);
        let connection = await dbConfig.connect();
        let details = await connection.request().query("select s.FirstName,s.Lastname,s.PhoneNumber,s.Debt,s.Discount  from Student s join Payments p on s.FirstName=p.FirstName and s.Lastname=p.Lastname and s.PhoneNumber=p.PhoneNumber where s.FirstName=N'" + FirstName + "' and s.Lastname=N'" + LastName + "' and s.PhoneNumber='" + PhoneNumber + "'");
        console.log(details.recordset);
        return (details.recordset);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports={
    getDetails
}