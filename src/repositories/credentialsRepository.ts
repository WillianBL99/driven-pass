import { Credential } from "@prisma/client";
import prisma from "../config/database.js";

export type CredentialCreateData = Omit<Credential, "id">;

export async function create(credentialCreateData: CredentialCreateData) {
  await prisma.credential.create({ data: credentialCreateData });
}

export async function getByUserId(userId: number) {
  return await prisma.credential.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.credential.findUnique({ where: { id } });
}

export async function getByUserIdAndLable(userId: number, label: string) {
  const credential = await prisma.credential.findFirst({
    where: { userId, AND: { label } },
  });
  return credential;
}

export async function remove(id: number) {
  return await prisma.credential.delete({ where: { id } });
}
