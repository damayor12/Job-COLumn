'use strict';

// Package imports
// const Express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// require('dotenv').config();
import * as dotenv from 'dotenv';
dotenv.config();

//Test busayo
// Local imports
// const router = require('./router');
// const db = require('./models/index');

import router from './router';
import db from './models/index';

const app = express();
const HOST_NAME = process.env.HOST_NAME;
const PORT = process.env.PORT_NUMBER;

app
  .use(cors())
  .use(morgan('short'))
  .use(express.json())
  .use(router);

async function bootstrap () {
  try {
    await db.connection.authenticate();
    await db.connection.sync();
    app.listen(PORT, () => {
      console.log(`http://${HOST_NAME}:${PORT}/`);
    });
    } catch (error) {
      console.error('Failed to connect to DB ' , error);
    }
}
bootstrap();