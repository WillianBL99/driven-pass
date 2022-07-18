import { Request, Response } from "express";
import { CardSchema } from "../schemas/cardSchema.js";
import * as cardsServer from "../services/cardsServer.js";

export async function create(req: Request, res: Response) {
  const partialCardData: CardSchema = req.body;
  const { userId } = res.locals;

  await cardsServer.create({ ...partialCardData, userId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const { userId } = res.locals;
  const queryCardId = req.query.id as number | undefined;

  const cards = await cardsServer.get(userId, queryCardId);

  res.send(cards);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const cardId = parseInt(req.params.id);

  if (isNaN(cardId)) {
    throw "Invalid Id";
  }

  await cardsServer.remove(userId, cardId);
  res.sendStatus(204);
}
