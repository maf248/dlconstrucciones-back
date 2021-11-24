const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/../dist/dlnconstrucciones/"));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/../dist/dlnconstrucciones/index.html")
});

app.use('/api', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
