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
        dbConfig.connect().then(()=>{
            let sqlquery=`select * from Student where Lastname =N+${pay.LastName} and PhoneNumber =${pay.PhoneNumber} and FirstName!= N${pay.FirstName}`;
            dbConfig.query(sqlquery,
            (err) => {
                if (err) console.log(err)
                //  res.send(recordset);
            });
            // s.Lastname=N'לב' and s.PhoneNumber='035706707' and s.FirstName!=N'ציפורה'")
        })
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
            let Way;
            if(post['WayofPayment']==1){
                Way='אשראי';
            }
            if(post['WayofPayment']==0){
                Way='מזומן';
            }
            let paymenttransfer=post['PaymentTransfer'];
            let day=new Date().getTime();
            
            console.log(day);
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
function SistersOrBrothers(student){

}
module.exports = {
    createPayment}