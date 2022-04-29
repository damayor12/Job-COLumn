'use strict';

// Package imports
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = {
  host: process.env.HOST_NAME,
  dialect: 'postgres',
  logging: false,
  port: process.env.DB_PORT,
};

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  config
);
const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js' && file.includes('.schema.js')) {
    const modelCreator = require(path.join(__dirname, file));
    const model = modelCreator(connection, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.connection = connection;
db.Sequelize = Sequelize;

module.exports = db;
