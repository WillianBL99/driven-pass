import { Request, Response } from "express";
import { CredentialSchema } from "../schemas/credentialSchema.js";
import * as credentialsServer from "../services/credentialsServer.js";

export async function create(req: Request, res: Response) {
  const partialCredentialData: CredentialSchema = req.body;
  const { userId } = res.locals;

  await credentialsServer.create({ ...partialCredentialData, userId });

  res.sendStatus(201);
}
