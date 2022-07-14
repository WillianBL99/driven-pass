import { Request, Response } from "express";
import { CredentialSchema } from "../schemas/credentialSchema.js";
import * as credentialsServer from "../services/credentialsServer.js";

export async function create(req: Request, res: Response) {
  const partialCredentialData: CredentialSchema = req.body;
  credentialsServer.create({ ...partialCredentialData });

  res.sendStatus(201);
}
