import AppError from "../config/error.js";
import * as secureNotesRepository from "../repositories/secureNotesRepository.js";
import { SecureNoteCreateData } from "../repositories/secureNotesRepository.js";

const DUPLICATE_LABLE = new AppError(
  "Duplicate lable",
  409,
  "Title already exists",
  "Insert a different title"
);

export async function create(secureNoteCreateData: SecureNoteCreateData) {
  const { title, userId } = secureNoteCreateData;

  const findTitle = await secureNotesRepository.getByUserIdAndTitle(
    userId,
    title
  );

  if (findTitle) {
    throw DUPLICATE_LABLE;
  }

  await secureNotesRepository.create(secureNoteCreateData);
}

export async function get(
  userId: number,
  querySecureNoteId: number | undefined
) {
  if (querySecureNoteId) {
    const secureNoteId = parseId(querySecureNoteId);
    const secureNote = await checkAccess(userId, secureNoteId);
    return secureNote;
  }

  return await secureNotesRepository.getByUserId(userId);
}

export async function remove(userId: number, secureNoteId: number) {
  await checkAccess(userId, secureNoteId);

  await secureNotesRepository.remove(secureNoteId);
}

export function parseId(queryId: number) {
  const id = Number(queryId);
  if (isNaN(id)) {
    throw "Invalid Id";
  }

  return id;
}

async function checkAccess(userId: number, secureNoteId: number) {
  const entityData = await secureNotesRepository.getById(secureNoteId);
  if (!entityData) {
    throw new AppError("Not found", 404, "Not found");
  }

  if (entityData.userId !== userId) {
    throw new AppError("Secure note access danied", 401, "c a d");
  }

  return entityData;
}
