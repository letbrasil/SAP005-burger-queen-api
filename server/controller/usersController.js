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
    return res.status(200).json(user);
  }
}

module.exports = UsersController;
