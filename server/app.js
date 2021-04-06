const cors = require('cors');
const express = require('express');

const bodyParser = require('body-parser');
const service = require('./services/userService');
const userRoutes = require('./routes/userRoutes');
const routespayment = require('./routes/paymentRoutes');
const routesStudent = require('./routes/studentRoutes');
const routesCourse =require('./routes/coursesRoutes');
const routesPersonalCard =require('./routes/personalCardRoutes');
const routesEmail= require('./routes/emailRoutes');
// require('dotenv').config()
app = express();
port = process.env.PORT || 4000;
console.log('connected');
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/user', userRoutes);
app.use('/getAllStudents',routesStudent);
// app.use('/add', userRoutes);
//app.use('/checkuser',userRoutes);
app.use('/add', routespayment);
app.use('/sisterandbrother',routespayment);
app.use('/student',routesStudent);
app.use('/addcourse',routesCourse);
app.use('/help',routesPersonalCard);
app.use('/addemail',routesEmail);
app.use('/', service);

//console.log('before addpayment');
//app.use('/addpayment', routespayment);
//app.use('/',servicePayment);
// app.post('/add', userRoutes)
//app.post('/addpayment', routespayment);
//app.post('/sisterandbrother',routespayment);
//console.log('before add student');
//app.post('/student',routesStudent);
//console.log('before post addpayment');
//app.post('/addcourse',routesCourse);
//app.get('/',routesStudent);
// app.get('/checkuser/:user',routes)
console.log('todo list RESTful API server started on: ' + port);
