const { Validator } = require("node-input-validator");
const {vErrorsMessageFormatter} = require("../../helpers/vErrorMessageFormatter");

//validation for the create route
module.exports.create = async (req, res, next) => {
  const v = new Validator(req.body, {
    userName: "required",
    email: "required|email",
    password: "required",
  });

  const matched = await v.check();
  if (!matched)
    return res.status(400).json({ error: vErrorsMessageFormatter(v.errors) });
  next();
};

//validation for the login route
module.exports.login = async (req, res, next) => {
  const v = new Validator(req.body, {
    email: "required",
    password: "required|minLength:8",
  });

  const matched = await v.check();
  if (!matched)
    return res.status(400).json({ error: vErrorsMessageFormatter(v.errors) });
  next();
};
