import { Credential } from "@prisma/client";
import { DUPLICATE_LABLE, INVALID_ID, NOT_FOUND } from "../events/ErrosList.js";
import * as credentialsRepository from "../repositories/credentialsRepository.js";
import { CredentialCreateData } from "../repositories/credentialsRepository.js";
import { internalCryptr } from "../utils/encrypt.js";
import { checkAccess } from "./index.js";

export async function create(credentialCreateData: CredentialCreateData) {
  const { password, label, userId } = credentialCreateData;
  const hashedPass = internalCryptr.encrypt(password);

  const findLabel = await credentialsRepository.getByUserIdAndLable(
    userId,
    label
  );

  if (findLabel) {
    throw DUPLICATE_LABLE;
  }

  await credentialsRepository.create({
    ...credentialCreateData,
    password: hashedPass,
  });
}

export async function get(
  userId: number,
  queryCredentialId: number | undefined
) {
  if (queryCredentialId) {
    const credentialId = parseCredentialId(queryCredentialId);
    return await findOneCredential(credentialId, userId);
  }

  return await findManyCredentials(userId);
}

export async function remove(userId: number, credentialId: number) {
  await checkCredentialAccess(userId, credentialId);

  await credentialsRepository.remove(credentialId);
}

async function findOneCredential(credentialId: number, userId: number) {
  const credential = await checkCredentialAccess(userId, credentialId);
  const password = descriptPassword(credential);
  return { ...credential, password };
}

async function findManyCredentials(userId: number) {
  const credentials = await credentialsRepository.getByUserId(userId);
  return credentials.map((credential) => {
    const password = descriptPassword(credential);
    return { ...credential, password };
  });
}

export function parseCredentialId(queryCredentialId: number) {
  const credentialId = Number(queryCredentialId);
  if (isNaN(credentialId)) {
    throw INVALID_ID;
  }
  return credentialId;
}

function descriptPassword({ password }: { password: string }) {
  return internalCryptr.decrypt(password);
}

async function checkCredentialAccess(userId: number, credentialId: number) {
  const credential = await credentialsRepository.getById(credentialId);
  if (!credential) {
    throw NOT_FOUND;
  }
  return checkAccess<Credential>(credential, "Card", userId);
}
