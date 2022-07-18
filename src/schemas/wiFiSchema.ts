import Joi from "joi";
import { WiFiCreateData } from "../repositories/wiFiRepository";
export type WiFiSchema = Omit<WiFiCreateData, "userId">;

export const wiFiSchema = Joi.object<WiFiSchema>({
  lable: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});
