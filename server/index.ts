'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import router from './router';

import db from './models/index';

const app = express();
const HOST_NAME = process.env.HOST_NAME || '127.0.0.1';
const PORT = process.env.PORT_NUMBER || 3200;

app
  .use(cors())
  .use(morgan('tiny'))
  .use(express.json())
  .use('/', router);

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

export { bootstrap, app };