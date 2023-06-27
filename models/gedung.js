'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gedung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gedung.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    floor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gedung',
  });
  return Gedung;
};