'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // cada usuário pode ter vários pedidos
      Users.hasMany(models.Orders, {
        foreignKey: 'user_id'
      })
    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
