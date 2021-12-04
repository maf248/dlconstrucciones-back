require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const port = Number(process.env.PORT || 80);

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

app.use(express.static(process.cwd() + '/public/'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
});
app.get('*', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
});

module.exports = app;
