'use strict';

function createCitiesTable (connection, DataTypes) {
  const Cities = connection.define('Cities', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    index: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, { timestamps: false });
  return Cities;
}

module.exports = createCitiesTable;