'use strict';
import env from 'dotenv';
env.config(); 
import fs from 'fs';
import path from 'path';
import { Sequelize, Options } from 'sequelize';
declare function require(name: string) : any;

const dbName = process.env.DB_NAME as string;
const dbUsername = process.env.DB_USERNAME as string;
const dbPort = process.env.DB_PORT as unknown as number;

const config : Options = {
  host: process.env.HOST_NAME,
  dialect: 'postgres',
  logging: false,
  port: dbPort,
};

console.log('DB PORT: ', dbPort);

const connection = new Sequelize(
  dbName,
  dbUsername,
  process.env.DB_PASSWORD,
  config
);
const db : any = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.ts' && file.includes('.schema.ts')) {
    const modelCreator = require(path.join(__dirname, file));
    const model = modelCreator(connection);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.connection = connection;
db.Sequelize = Sequelize;

// module.exports = db;
export default db;