const jwt = require("jsonwebtoken");
/**
 * create a token.
 *
 * @param {Object} info - the data to encrypted by JWT.
 * @param {String} tokenSecret - the token secret to be used by JWT.
 * @param {Integer} expiration - the token expiration time calculated in milliseconds. 
 * @returns {Promise} - a Promise, resolving to the token.
 */

module.exports.jwtHelper = (info, tokenSecret, expiration) => {
  return new Promise((resolve, reject) => {
    // const stringifiedData = JSON.stringify(value);
    jwt.sign(
      { data: info },
      tokenSecret,
      { expiresIn: 60 * 60 * 24 },
      (err, token) => {
        if (err) {
          return reject(
            "Token Could not be generated. Please try signing up again!"
          );
        }
        return resolve(token);
      }
    );
  });
};
