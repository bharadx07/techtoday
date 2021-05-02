const Joi = require("@hapi/joi");

const ForgotPasswordValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    app: Joi.boolean()
  });
  return schema.validate(data, { abortEarly: false });
};


module.exports = ForgotPasswordValidation; 