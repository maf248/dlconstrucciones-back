const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public/'));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
});
app.get('*', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
});

module.exports = app;
