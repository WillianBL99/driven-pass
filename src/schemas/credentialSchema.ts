import Joi from "joi";
import { CredentialCreateData } from "../repositories/credentialsRepository";
export type CredentialSchema = Omit<CredentialCreateData, "userId">;

const urlRgx = /^(https:\/\/\/www\.|http:\/\/www\.|www\.|https:\/\/|http:\/\/)/;

export const credentialSchema = Joi.object<CredentialSchema>({
  label: Joi.string().required(),
  userName: Joi.string().required(),
  url: Joi.string().regex(urlRgx).required(),
  password: Joi.string().required(),
});
