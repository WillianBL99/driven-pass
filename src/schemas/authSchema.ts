import Joi from "joi";

const mainValidations = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});

export const signUp = mainValidations;
export const signIn = mainValidations;
