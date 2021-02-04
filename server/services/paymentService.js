const createPayment = async (pay) => {
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
        let Phone = post['PhoneNumber'];
        let Price = post['PriceToStudent'];
        let datepay = post['Today'];
        let sum = post['Sum'];
        let Way;
        if (post['WayofPayment'] == 1) {
            Way = 'אשראי';
        }
        if (post['WayofPayment'] == 0) {
            Way = 'מזומן';
        }
        let paymenttransfer = post['PaymentTransfer'];
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
            dbConfig.query("insert into Payments values(N'" + fname + "',N'" + lname + "','" + Phone + "','" + Price + "','" + datepay + "','" + sum + "',N'" + Way + "',N'" + paymenttransfer + "')",

                (err) => {
                    if (err) console.log(err)
                    //  res.send(recordset);
                });
        });
      //  return sisterandbrother.recordset;
    }
    catch (error) {
        console.log(error);
    }
};
const SAndB = async (p) => {
    try {
        let sql = require("mssql/msnodesqlv8");
        let post = {
            FirstName: p.FirstName,
            LastName: p.LastName,
            PhoneNumber: p.PhoneNumber
        };
        let fname = post['FirstName'];
        let lname = post['LastName'];
        let Phone = post['PhoneNumber'];
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
        let connection = await dbConfig.connect();
        let sisterandbrother = await connection.request().query("select * from Student where Lastname =N'" + lname + "' and PhoneNumber ='" + Phone + "' and FirstName!= N'" + fname + "'")
        console.log(sisterandbrother.recordset);
        if (sisterandbrother.recordset.length > 0)
            return true;
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
    }
}
//select count(*) from Student where Lastname =N'"+lname+"' and PhoneNumber ='"+Phone+"' and FirstName!= N'"+fname+"'
// dbConfig.connect().then(() => {
//     let sqlquery = "declare @dayy int; select @dayy=count(*) from Student where Lastname =N'" + lname + "' and PhoneNumber ='" + Phone + "' and FirstName!= N'" + fname + "'"
//     dbConfig.query(sqlquery,
//         (err) => {
//             if (err) console.log(err)
//             //  res.send(recordset);
//             else {
//                 console.log('have sister');
//             }
//         });

//     // s.Lastname=N'לב' and s.PhoneNumber='035706707' and s.FirstName!=N'ציפורה'")
// })





// function SistersOrBrothers(student) {
//     let x;
//     try {
//         let sql = require("mssql/msnodesqlv8");
//         let post = {
//             FirstName: student.FirstName,
//             LastName: student.LastName,
//             PhoneNumber: student.PhoneNumber,
//             PriceToStudent: student.PriceToStudent,
//             Today: student.datee,
//             Sum: student.Sum,
//             WayofPayment: student.WayofPayment,
//             PaymentTransfer: student.PaymentTransfer
//         };
//         let fname = post['FirstName'];
//         let lname = post['LastName'];
//         let Phone = post['PhoneNumber'];
//         let dbConfig = new sql.ConnectionPool({
//             driver: "msnodesqlv8",
//             server: 'localhost',
//             database: 'ShovalSwimmingCourses',
//             "options": {
//                 "encrypt": false,
//                 "enableArithAbort": true,
//                 trustedConnection: true,
//                 useUTC: true
//             },
//         });
//         dbConfig.connect().then(() => {
//             let sqlquery = "select count(*) from Student where Lastname =N'" + lname + "' and PhoneNumber ='" + Phone + "' and FirstName!= N'" + fname + "'"
//             let result = dbConfig.query(sqlquery,
//                 {
//                     if(err) { x = rows; console.log(x); }



//                 });
//             console.log(result.recordset);
//             return result.recordset;
//         }

//         );
//         return x;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
module.exports = {
    createPayment,SAndB
}