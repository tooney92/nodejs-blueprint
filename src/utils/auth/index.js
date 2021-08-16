const jwt = require("jsonwebtoken");

module.exports.verifyToken = async function (req, res, next) {
  const token = req.header("Authorization");
  if (token === undefined || token === "") {
    return res.status(401).json({ error: "Access Denied, please log in" });
  } else {
    try {
      const { data } = await jwt.verify(token, process.env.token_secret);
      if (!data) {
        return res.status(401).json({ error: "Access Denied" });
      }
      req.user = data;
      next();
    } catch (err) {
      res.status(400).send({ error: "invalid token" });
    }
  }
  
};
