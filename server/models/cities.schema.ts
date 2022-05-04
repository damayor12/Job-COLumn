'use strict';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface CitiesInt {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

// interface AuthorAttributes {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// };

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
// interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> {}

interface CityInstance extends Model<CitiesInt>, CitiesInt {}

function createCitiesTable(connection: Sequelize) {
  const Cities = connection.define<CityInstance>(
    'Cities',
    {
      name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      index: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    { timestamps: false },
  );
  return Cities;
}

module.exports = createCitiesTable;

