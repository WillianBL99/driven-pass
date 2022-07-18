import { SecureNote } from "@prisma/client";
import { DUPLICATE_LABLE, INVALID_ID } from "../events/ErrosList.js";
import * as secureNotesRepository from "../repositories/secureNotesRepository.js";
import { SecureNoteCreateData } from "../repositories/secureNotesRepository.js";
import { checkAccess } from "./index.js";

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
    const secureNote = await checkSecureNotesAccess(userId, secureNoteId);
    return secureNote;
  }

  return await secureNotesRepository.getByUserId(userId);
}

export async function remove(userId: number, secureNoteId: number) {
  await checkSecureNotesAccess(userId, secureNoteId);

  await secureNotesRepository.remove(secureNoteId);
}

export function parseId(queryId: number) {
  const id = Number(queryId);
  if (isNaN(id)) {
    throw INVALID_ID;
  }

  return id;
}

async function checkSecureNotesAccess(userId: number, secureNoteId: number) {
  const secureNote = await secureNotesRepository.getById(secureNoteId);
  return checkAccess<SecureNote | null>(secureNote, "SecureNote", userId)
}
