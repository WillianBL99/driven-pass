import { Credential } from "@prisma/client";
import prisma from "../config/database.js";

export type CredentialCreateData = Omit<Credential, "id">;

export async function create(credentialCreateData: CredentialCreateData) {
  await prisma.credential.create({ data: credentialCreateData });
}
