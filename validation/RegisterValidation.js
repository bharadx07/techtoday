const Joi = require("@hapi/joi");

//Register Validation
const RegisterValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data, { abortEarly: false });
};

module.exports = RegisterValidation;  