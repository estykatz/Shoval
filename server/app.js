const cors = require('cors');
const express = require('express');
const routes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
// require('dotenv').config()


app = express();
port = process.env.PORT || 4000;
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/user', routes);

console.log('todo list RESTful API server started on: ' + port);
