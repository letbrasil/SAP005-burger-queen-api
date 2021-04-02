const database = require('../db/models');

class UsersController {
  static async getAllUsers(req, res) {
    const users = await database.Users.findAll({
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const { uid } = req.params;
    const user = await database.Users.findAll({
      where: {
        id: Number(uid),
      },
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(user);
  }

  static async createUser(req, res) {
    const newUser = await req.body;
    const user = await database.Users.create(newUser);
    return res.status(201).json(user);
  }

  static async updateUser(req, res) {
    const { uid } = req.params;
    const { name, password, role, restaurant } = req.body;
    await database.Users.update({
      name,
      password,
      role,
      restaurant,
    },
    {
      where: {
        id: Number(uid),
      },
    });
    const updatedUser = await database.Users.findByPk(uid, {
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(updatedUser);
  }

  static async deleteUser(req, res) {
    const { uid } = req.params;
    await database.Users.destroy({
      where: {
        id: Number(uid),
      },
    });
    return res.status(200).json(`Usuário id #${uid} apagado com sucesso!`);
  }
}

module.exports = UsersController;
