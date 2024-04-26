const express = require('express');
require('dotenv').config();
const linkRouter = require('./routes');
const pingHandler = require('./middlewares/ping-handler');
const errorHandler = require('./middlewares/error-handler');

const app = express();
app.use(express.json());

app.use('/api', linkRouter);
app.use('/ping', pingHandler);
app.use(errorHandler);

const port = process.env.PORT || 5003;

app.listen(port, () => {
  console.log('server listening on port: ', process.env.PORT );
});