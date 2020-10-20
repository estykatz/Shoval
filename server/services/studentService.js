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
                stFirstName: stud.stFirstName,
                stLastName: stud.stLastName,
                identity: stud.identity,
                phone: stud.phone,
                PlaceOfStudy: stud.PlaceOfStudy,
                SwimmingLevels: stud.SwimmingLevels,
                Debt: stud.Debt,
                Discount: stud.Discount,
                Remarks: stud.Remarks
            };
            let fname = post['stFirstName'];
            let lname = post['stLastName'];
            let id = post['identity'];
            let Phone = post['phone'];
            let PlaceOfStudy = post['PlaceOfStudy'];
            let SwimmingLevels = post['SwimmingLevels'];
            let Debt = post['Debt'];
            let Discount = post['Discount'];
            let Remarks = post['Remarks'];
            console.log('before insert');
            dbConfig.query("insert into Student values(N'" + fname + "',N'" + lname + "','" + id + "','" + Phone + "',N'" + PlaceOfStudy + "','" + SwimmingLevels + "','" + Debt + "','" + Discount + "',N'" + Remarks + "')",
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
    createStudent
}