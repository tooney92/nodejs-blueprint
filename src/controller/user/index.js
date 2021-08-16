const userDao = require("../../DAO/daos/user");

/**
 * create a new user.
 *
 * @param {Object} user - a user object.
 * @returns {Promise} - a Promise, resolving to the string value
 *   for the ID of the site in the database.
 */

module.exports.create = (user, res) => userDao.create(user, res);
module.exports.login = (user, res) => userDao.login(user, res);
module.exports.findById = (id, res) => userDao.findById(id, res);
module.exports.update = (req, res) => userDao.update(req, res);