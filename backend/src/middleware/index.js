function validateFields(field) {
  return function (req, res, next) {
    const fields = field.filter((fieldName) => !req.body[fieldName]);

    if (fields.length === 0) {
      next();
    } else {
      res
        .status(400)
        .json({
          error: `Verifique se os campos obrigatórios estão presentes: ${fields.join(
            ", "
          )}`,
        });
    }
  };
}

module.exports = validateFields;
