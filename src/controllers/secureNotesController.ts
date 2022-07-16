import { Request, Response } from "express";
import { SecureNoteSchema } from "../schemas/secureNoteSchema.js";
import * as secureNotesServer from "../services/secureNotesServer.js";

export async function create(req: Request, res: Response) {
  const partialSecureNoteData: SecureNoteSchema = req.body;
  const { userId } = res.locals;

  await secureNotesServer.create({ ...partialSecureNoteData, userId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const { userId } = res.locals;
  const querySecureNoteId = req.query.id as number | undefined;

  const secureNotes = await secureNotesServer.get(userId, querySecureNoteId);

  res.send(secureNotes);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const secureNoteId = parseInt(req.params.id);

  if (isNaN(secureNoteId)) {
    throw "Invalid Id";
  }

  await secureNotesServer.remove(userId, secureNoteId);
  res.sendStatus(204);
}
