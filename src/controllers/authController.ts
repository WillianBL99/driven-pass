import { Request, Response } from "express";
import * as authServer from "../services/authServer.js";

export async function signUp(req: Request, res: Response) {
  const signUpData = req.body;
  await authServer.signUp(signUpData);

  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const signInData = req.body;
  const token = await authServer.signIn(signInData);

  res.status(200).send({ token });
}
