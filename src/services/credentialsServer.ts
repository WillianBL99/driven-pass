import * as credentialsRepository from "../repositories/credentialsRepository.js";
import { CredentialCreateData } from "../repositories/credentialsRepository.js";

export async function create(credentialCreateData: CredentialCreateData) {
  await credentialsRepository.create(credentialCreateData);
}
