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
    return res.status(201).json(product);
  }

  static async updateProduct(req, res) {
    const { productId } = req.params;
    const { name, price, flavor, complement, type, subtype, image } = req.body;
    await database.Products.update({
      name,
      price,
      flavor,
      complement,
      type,
      subtype,
      image,
    },
    {
      where: {
        id: Number(productId),
      },
    });
    const updatedProduct = await database.Products.findByPk(productId);
    return res.status(200).json(updatedProduct);
  }

  static async deleteProduct(req, res) {
    const { productId } = req.params;
    await database.Products.destroy({
      where: {
        id: Number(productId),
      },
    });
    return res.status(200).json(`Produto id #${productId} apagado com sucesso!`);
  }
}

module.exports = ProductsController;
