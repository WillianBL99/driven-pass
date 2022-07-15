import AppError from "../config/error.js";
import * as credentialsRepository from "../repositories/credentialsRepository.js";
import { CredentialCreateData } from "../repositories/credentialsRepository.js";
import { internalCryptr } from "../utils/encrypt.js";

const DUPLICATE_LABLE = new AppError(
  "Duplicate lable",
  409,
  "Lable already exists",
  "Insert a different label"
);

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

export async function get(id: number | undefined){
  if(id){
    if(isNaN(id)){
      throw "Ivalid id"
    }

    const credential = await credentialsRepository.getById(id );
  }
}