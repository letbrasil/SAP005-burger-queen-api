const database = require('../db/models');

class OrdersController {
  static async getAllOrders(req, res) {
    const orders = await database.Orders.findAll({
      include: [{
        model: database.Products,
        as: 'products',
        required: false,
        attributes: ['name', 'price', 'flavor', 'complement'],
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
        attributes: ['name', 'price', 'flavor', 'complement'],
        through: {
          model: database.ProductsOrders,
          as: 'details',
          attributes: ['product_id', 'qty'],
        },
      }],
    });
    return res.status(200).json(order);
  }

  static async createOrder(req, res) {
    const newOrder = await req.body;
    // por enquanto, esta função cria somente o pedido com id, user_id, table, client_name e status(default)
    // criar array de products para incluir no pedido
    const order = await database.Orders.create(newOrder);
    return res.status(201).json(order);
  }

  static async updateOrder(req, res) {
    const { orderId } = req.params;
    const { table, client_name, status } = req.body;
    // como editar os itens do pedido ??
    // por enquanto, só é possível alterar table, client_name e status
    await database.Orders.update({
      table,
      client_name,
      status,
    },
    {
      where: {
        id: Number(orderId),
      },
    });
    const updatedOrder = await database.Orders.findByPk(orderId);
    return res.status(200).json(updatedOrder);
  }

  static async deleteOrder(req, res) {
    const { orderId } = req.params;
    await database.ProductsOrders.destroy({
      where: {
        order_id: Number(orderId),
      },
    });
    await database.Orders.destroy({
      where: {
        id: Number(orderId),
      }
    });
    return res.status(200).json(`Pedido id #${orderId} apagado com sucesso!`);
  }
}

module.exports = OrdersController;
