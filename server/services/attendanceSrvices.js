const create = async (pay) => {
    try {
        let sql = require("mssql/msnodesqlv8");
     
        let post = {
            FirstName: pay.FirstName,
            LastName: pay.LastName,
            PhoneNumber: pay.PhoneNumber,
            PriceToStudent: pay.PriceToStudent,
            Today: pay.datee,
            Sum: pay.Sum,
            WayofPayment: pay.WayofPayment,
            PaymentTransfer: pay.PaymentTransfer
            
        };
        let fname = post['FirstName'];
        let lname = post['LastName'];
        let Phone=post['PhoneNumber'];
        let Price=post['PriceToStudent'];
        let datepay=post['Today'];
        let sum = post['Sum'];
        let Way;
        if(post['WayofPayment']==1){
            Way='אשראי';
        }
        if(post['WayofPayment']==0){
            Way='מזומן';
        }
        let paymenttransfer=post['PaymentTransfer'];
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
        //select count(*) from Student where Lastname =N'"+lname+"' and PhoneNumber ='"+Phone+"' and FirstName!= N'"+fname+"'
        dbConfig.connect().then(()=>{
            let sqlquery="declare @dayy int; select @dayy=count(*) from Student where Lastname =N'"+lname+"' and PhoneNumber ='"+Phone+"' and FirstName!= N'"+fname+"'"
            dbConfig.query(sqlquery,
            (err) => {
                if (err) console.log(err)
                //  res.send(recordset);
                else{
                    console.log('have sister');
                }
            });
            
            // s.Lastname=N'לב' and s.PhoneNumber='035706707' and s.FirstName!=N'ציפורה'")
        })
        dbConfig.connect().then(() => {//function (err) {
            console.log('connected');
            
            console.log(fname);
            console.log(lname);
            console.log(Phone);
            console.log(Price);
            console.log(datepay);
            console.log(sum);
            console.log(Way);
            console.log(paymenttransfer);
            dbConfig.query("insert into Payments values(N'" + fname + "',N'" + lname + "','" + Phone + "','"+Price+"','"+datepay+"','"+sum+"',N'"+Way+"',N'"+paymenttransfer+"')",
            
            (err) => {
                    if (err) console.log(err)
                    //  res.send(recordset);
                });
           
        });
        
    }
   // catch (error) {
    //    console.log(error);
    ////}

//};
////function attendance (student){
    //כול עוד התלמידים שמשיוכים לקורס קיימים תדפיס אותם
// אבל איך הוא יודע איזה קורס לשייך( פונקציה לחישוב תאריך נוכחי + אופציה לייבא קורס אחר)

//if(cources==setTimeout()||cources+30<setTimeout){
  //c = cources
   // השוואה על התלמידים שמשיוכים לקורס הזה
   //while(){
      // console.log(lastname )
      // console.log(firstname)
  //// }
//}
//}



module.exports = {
    createPayment}