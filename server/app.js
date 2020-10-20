const cors = require('cors');
const express = require('express');
const routes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const service = require('./services/userService');
const routespayment = require('./routes/paymentRoutes');
const servicePayment = require('./services/paymentService');
const routesStudent = require('./routes/studentRoutes');
const serviceStudent = require('./services/studentService');
// require('dotenv').config()


app = express();
port = process.env.PORT || 4000;
console.log('connected');
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
console.log('before user');
app.use('/user', routes);
app.use('/add', routes);
app.use('/addpayment', routespayment);
app.use('/student',routesStudent)
app.use('/', service)
console.log('before addpayment');
//app.use('/addpayment', routespayment);
//app.use('/',servicePayment);
app.post('/add', routes)
app.post('/addpayment', routespayment);
console.log('before add student');
app.post('/student',routesStudent);
console.log('before post addpayment');


console.log('todo list RESTful API server started on: ' + port);
