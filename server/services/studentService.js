const json = require("body-parser/lib/types/json");

const createStudent = async (stud) => {
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
                FirstName: stud.FirstName,
                Lastname: stud.Lastname,
                studentId: stud.studentId,
                PhoneNumber: stud.PhoneNumber,
                PlaceOfStudy: stud.PlaceOfStudy,
                SwimmingLevels: stud.SwimmingLevels,
                Debt: stud.Debt,
                Discount: stud.Discount,
                Remarks: stud.Remarks
            };
            let fname = post['FirstName'];
            let lname = post['Lastname'];
            let id = post['studentId'];
            let Phone = post['PhoneNumber'];
            let PlaceOfStudy = post['PlaceOfStudy'];
            let SwimmingLevels = post['SwimmingLevels'];
            let Debt = post['Debt'];
            let Discount = post['Discount'];
            let Remarks = post['Remarks'];
            console.log('before insert');
            dbConfig.query("insert into Student values(N'" + fname + "',N'" + lname + "','" + id + "','" + Phone + "',N'" + PlaceOfStudy + "',N'" + SwimmingLevels + "','" + Debt + "','" + Discount + "',N'" + Remarks + "')",
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
const getAllStudents = async () => {
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
        console.log('studentService');
        let connection = await dbConfig.connect();
        console.log('connected');
        let allStudents = await connection.request().query("select * from Student")
        return (allStudents.recordset);
    }
    catch (error) {
        console.log(error);
    }
}
const getLevelandPrice = async () => {
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
        let connection = await dbConfig.connect();
        console.log('connected');
        let levelsandPrice = await connection.request().query("select Level,Price from Course ");     
        return (levelsandPrice.recordset);
    }
    catch (err) {
        console.log(err);
    }
}
const getStudentsPhone = async (studentPhone) => {
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
        const phone = studentPhone.PhoneNumber;
        console.log(phone);
        let connection = await dbConfig.connect();
        let allStudents = await connection.request().query("select s.PhoneNumber from Student s where s.PhoneNumber like '" + phone + "%'")
        return (allStudents.recordset);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {
    createStudent, getAllStudents, getStudentsPhone
    ,getLevelandPrice
}