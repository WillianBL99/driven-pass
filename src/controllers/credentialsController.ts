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
  const queryCredentialId = req.query.id as number | undefined;

  const credentials = await credentialsServer.get(userId, queryCredentialId);

  res.send(credentials);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const credentialId = parseInt(req.params.id);

  if (isNaN(credentialId)) {
    throw "Invalid Id";
  }

  await credentialsServer.remove(userId, credentialId);
  res.sendStatus(204);
}
