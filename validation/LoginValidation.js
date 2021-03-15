const Joi = require("@hapi/joi");

const LoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(data, { abortEarly: false });
};


module.exports = LoginValidation;