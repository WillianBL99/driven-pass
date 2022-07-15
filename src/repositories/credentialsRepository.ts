import { Credential } from "@prisma/client";
import prisma from "../config/database.js";

export type CredentialCreateData = Omit<Credential, "id">;

export async function create(credentialCreateData: CredentialCreateData) {
  await prisma.credential.create({ data: credentialCreateData });
}

export async function getByUserIdAndLable(userId: number, label: string) {
  const credential = await prisma.credential.findFirst({
    where: { userId, AND: { label } },
  });
  return credential;
}
