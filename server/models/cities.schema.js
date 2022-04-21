'use strict';

function createCitiesTable (connection, DataTypes) {
  const Cities = connection.define('Cities', {
    name: DataTypes.STRING,
    index: DataTypes.FLOAT(14),
    latitude: DataTypes.FLOAT(6),
    longitude: DataTypes.FLOAT(6)
  }, { timestamps: false });
  return Cities;
}

module.exports = createCitiesTable;