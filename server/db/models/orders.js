'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // cada pedido pertence a um único usuário
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })
      // cada pedido pode ter vários produtos
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'products',
        foreignKey: 'order_id',
        otherKey: 'product_id'
      })
    }
  };
  Orders.init({
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
