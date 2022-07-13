import { Request, Response } from "express";
import * as authServer from "../services/authServer.js";

export async function signUp(req: Request, res: Response) {
  const signUpData = req.body;
  await authServer.signUp(signUpData);

  res.sendStatus(201);
}
