'use strict';

// Package imports
const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Local imports
const router = require('./router');
const db = require('./models/index');

const app = Express();
const HOST_NAME = process.env.HOST_NAME;
const PORT = process.env.PORT_NUMBER;

app
  .use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(router);

async function bootstrap () {
  try {
    await db.connection.authenticate();
    await db.connection.sync();
    app.listen(PORT, () => {
      console.log(`http://${HOST_NAME}:${PORT}/`);
    });
    } catch (error) {
      console.error('Failed to connect to DB');
    }
}
bootstrap();