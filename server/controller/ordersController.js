const database = require('../db/models');

class OrdersController {
  static async getAllOrders(req, res) {
    const orders = await database.Orders.findAll({
      include: [{
        model: database.Products,
        as: 'products',
        required: false,
        attributes: ['name', 'flavor', 'complement'],
        through: {
          model: database.ProductsOrders,
          as: 'details',
          attributes: ['product_id', 'qty'],
        },
      }],
    });
    return res.status(200).json(orders);
  }

  static async getOrderById(req, res) {
    const { orderId } = req.params;
    const order = await database.Orders.findAll({
      where: {
        id: Number(orderId),
      },
      include: [{
        model: database.Products,
        as: 'products',
        required: false,
        attributes: ['name', 'flavor', 'complement'],
        through: {
          model: database.ProductsOrders,
          as: 'details',
          attributes: ['product_id', 'qty'],
        },
      }],
    });
    return res.status(200).json(order);
  }

  // static async createOrder(req, res) {
  //   const newOrder = await req.body;

  //   const order = await database.Orders.create(newOrder);
  //   return res.status(201).json(order);
  // }

  // static async deleteOrder(req, res) {
  //   const { orderId } = req.params;
  //   await database.Orders.destroy({
  //     where: {
  //       id: Number(orderId),
  //     },
  //   });
  //   return res.status(200).json('Pedido apagado');
  // }
}

module.exports = OrdersController;
