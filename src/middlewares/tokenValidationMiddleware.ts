import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../config/error.js";
import { env } from "../utils/env.js";

const EMPTY_TOKEN = new AppError(
  "Empty token",
  401,
  "Invalid token",
  "Make sure you send the token correctly"
);

export async function tokenValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.header("Authorization") ?? "";
  const token = parseToken(authorization);
  let userId = null;

  try {
    const { id } = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    userId = id;
  } catch (error: any) {
    console.log(error);
    throw new AppError("Invalid token", 403, "Invalid token", error);
  }
  
  res.locals.userId = userId;
  next();
}

function parseToken(header: string) {
  if (!header.includes("Bearer")) {
    throw EMPTY_TOKEN;
  }
  return header.replace("Bearer ", "").trim();
}
