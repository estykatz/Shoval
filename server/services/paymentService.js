const createPayment = async (pay) => {
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
        dbConfig.connect().then(() => {//function (err) {

            console.log('connected');

            let post = {
                FirstName: pay.FirstName,
                LastName: pay.LastName,
                PhoneNumber: pay.PhoneNumber,
                PriceToStudent: pay.PriceToStudent,
                Today: pay.Date,
                Sum: pay.Sum,
                WayofPayment: pay.WayofPayment,
                PaymentTransfer: pay.PaymentTransfer
            };
            let fname = post['FirstName'];
            let lname = post['LastName'];
            let Phone=post['PhoneNumber'];
            let Price=post['PriceToStudent'];
            let date=post['Today'];
            let sum = post['Sum'];
            let Way = 'ashrai';
            let paymenttransfer=0;
            let day=convert(varchar,date,105)
            dbConfig.query("insert into Payments values('" + fname + "','" + lname + "','" + Phone + "','"+Price+"','"+day+"','"+sum+"','"+Way+"','"+paymenttransfer+"')",
                (err) => {
                    if (err) console.log(err)
                    //  res.send(recordset);
                });
        });
    }
    catch (error) {
        console.log(error);
    }

};
module.exports = {
    createPayment}