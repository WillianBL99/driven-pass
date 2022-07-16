/* import { Credential } from "@prisma/client";
import { Prisma } from "../../node_modules/.prisma/client/index.js";
import prisma from "../config/database.js";


export type ModelName = Lowercase<Prisma.ModelName>


export type CredentialCreateData = Omit<Credential, "id">;

export async function create(credentialCreateData: CredentialCreateData, entity: ModelName) {
  await prisma[entity].create({ data: credentialCreateData });
}

export async function getByUserId(id: number, entity: ModelName) {
  return await prisma.user.findUnique({
    select: {
      [entity]: true,
    },
    where: { id },
  });
}

export async function getById(id: number) {
  return await prisma.credential.findUnique({ where: { id } });
}

export async function getByUserIdAndLable(
  userId: number,
  label: string,
  entity: ModelName
) {
  const credential = await prisma[entity].findFirst({
    where: { userId, AND: { label } },
  });
  return credential;
}

export async function remove(id: number, entity: ModelName) {
  return await prisma[entity].delete({ where: { id } });
}
 */