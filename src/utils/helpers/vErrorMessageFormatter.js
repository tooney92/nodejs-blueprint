//formats the v error messages for node-input-validator dependency.
module.exports.vErrorsMessageFormatter = (Verrors) => {
  let errors = Object.entries(Verrors);
  errorsFormatted = errors.map((h) => h[1].message);
  return errorsFormatted;
};
