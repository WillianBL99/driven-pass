import Joi from "joi";
import { SecureNoteCreateData } from "../repositories/secureNotesRepository";

export type SecureNoteSchema = Omit<SecureNoteCreateData, "userId">;

export const secureNoteSchema = Joi.object<SecureNoteSchema>({
  bodyNote: Joi.string().max(1000).required(),
  title: Joi.string().max(50).required()
})