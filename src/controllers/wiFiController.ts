import { Request, Response } from "express";
import { WiFiSchema } from "../schemas/wiFiSchema.js";
import * as wiFisServer from "../services/wiFiServer.js";

export async function create(req: Request, res: Response) {
  const partialWiFiData: WiFiSchema = req.body;
  const { userId } = res.locals;

  await wiFisServer.create({ ...partialWiFiData, userId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const { userId } = res.locals;
  const queryWiFiId = req.query.id as number | undefined;

  const wiFis = await wiFisServer.get(userId, queryWiFiId);

  res.send(wiFis);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const wiFiId = parseInt(req.params.id);

  if (isNaN(wiFiId)) {
    throw "Invalid Id";
  }

  await wiFisServer.remove(userId, wiFiId);
  res.sendStatus(204);
}
