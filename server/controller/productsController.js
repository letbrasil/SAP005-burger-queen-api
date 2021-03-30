const database = require('../db/models');

class ProductsController {
  static async getAllProducts(req, res) {
    const products = await database.Products.findAll();
    return res.status(200).json(products);
  }

  static async getProductById(req, res) {
    const { productId } = req.params;
    const product = await database.Products.findAll({
      where: {
        id: Number(productId),
      },
    });
    return res.status(200).json(product);
  }

  static async createProduct(req, res) {
    const newProduct = await req.body;
    const product = await database.Products.create(newProduct);
    return res.status(200).json(product);
  }
}

module.exports = ProductsController;
