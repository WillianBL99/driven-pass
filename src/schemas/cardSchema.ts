import Joi from "joi";
import { CardCreateData } from "../repositories/cardsRepository.js";
export type CardSchema = Omit<CardCreateData, "userId">;
const types = ["credit", "debit", "both"];

const numberString = /(\d)/;
const date = /(\d){2}\/(\d){2}/;
export const cardSchemas = Joi.object<CardSchema>({
  number: Joi.string().regex(numberString).min(13).max(16).required(),
  holderName: Joi.string().required(),
  secureCode: Joi.string().regex(numberString).min(3).max(4).required(),
  expirationDate: Joi.string().regex(date).required(),
  password: Joi.string().regex(numberString).min(4).max(6).required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string()
    .valid(...types)
    .required(),
  lable: Joi.string().required(),
});
