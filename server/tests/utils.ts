import express from "express";
import router from "../router";
import env from 'dotenv';
env.config(); 

function createServer() {
  const app = express();

  app.use(express.json());

  app.use('/', router);

  return app;
}

export default createServer;