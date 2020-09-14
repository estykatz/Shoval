const cors = require('cors');
const express = require('express');
const routes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const service=require('./services/UserService');

// require('dotenv').config()


app = express();
port = process.env.PORT || 4000;
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/user', routes);
app.use('/add',routes);
app.use('/',service)

app.post('/add',routes)
   

console.log('todo list RESTful API server started on: ' + port);
