const database = require('../db/models');

class UsersController {

  static async getAllUsers(req, res) {
    const users = await database.Users.findAll();
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const { uid } = req.params;
    const user = await database.Users.findAll({
      where: {
        id: Number(uid)
      }
    });
    return res.status(200).json(user);
  }

}

module.exports = UsersController;
