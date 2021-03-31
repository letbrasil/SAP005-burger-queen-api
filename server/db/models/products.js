'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // cada produto pode pertencer a vários pedidos
      Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        as: 'orders',
        foreignKey: 'product_id',
        otherKey: 'order_id'
      })
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
