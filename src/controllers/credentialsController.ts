import { Request, Response } from "express";
import { CredentialSchema } from "../schemas/credentialSchema.js";
import * as credentialsServer from "../services/credentialsServer.js";

export async function create(req: Request, res: Response) {
  const partialCredentialData: CredentialSchema = req.body;
  const { userId } = res.locals;

  await credentialsServer.create({ ...partialCredentialData, userId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const { userId } = res.locals;
  const credentialId = req.query.id as number | undefined;
  const credentials = await credentialsServer.get(userId, credentialId);

  res.send(credentials);
}
