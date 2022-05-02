'use strict';
import { Sequelize , DataTypes } from 'sequelize';


function createCitiesTable (connection : Sequelize) {
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

// module.exports = createCitiesTable;
export default createCitiesTable;