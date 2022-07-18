import { SecureNote } from "@prisma/client";
import prisma from "../config/database.js";

export type SecureNoteCreateData = Omit<SecureNote, "id">;

export async function create(secureNoteCreateData: SecureNoteCreateData) {
  await prisma.secureNote.create({ data: secureNoteCreateData });
}

export async function getByUserId(userId: number) {
  return await prisma.secureNote.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.secureNote.findUnique({ where: { id } });
}

export async function getByUserIdAndTitle(userId: number, title: string) {
  const secureNote = await prisma.secureNote.findFirst({
    where: { userId, AND: { title } },
  });
  return secureNote;
}

export async function remove(id: number) {
  return await prisma.secureNote.delete({ where: { id } });
}
