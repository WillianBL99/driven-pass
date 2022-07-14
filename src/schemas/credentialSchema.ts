import Joi from "joi";
import { CredentialCreateData } from "../repositories/credentialsRepository";
export type CredentialSchema = Omit<CredentialCreateData, "userId">;

export const credentialSchema = Joi.object<CredentialSchema>({
  label: Joi.string().required(),
  userName: Joi.string().required(),
  url: Joi.string().uri().required(),
  password: Joi.string().required(),
});
