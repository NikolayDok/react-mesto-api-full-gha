const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleErrorDefault = require('./middlewares/handleErrorDefault');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestLogger);

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(handleErrorDefault);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
