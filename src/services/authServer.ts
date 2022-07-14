import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import AppError from "../config/error.js";
import "../config/setup.js";
import * as userRepository from "../repositories/userRepository.js";
import { internalBcrypt } from "../utils/encrypt.js";

const SIGN_IN_UNAUTHORIZED = new AppError(
  "Sign-in unauthorized",
  401,
  "Email or password are incorrect",
  "Check and try again"
);

const EMAIL_ALREADY_EXISTS = new AppError(
  "Sign-up conflict",
  409,
  "Email already registered",
  "login or register another email"
);

interface MainProperties {
  email: string;
  password: string;
}

export type SignUp = MainProperties;
export type SignIn = MainProperties;

export async function signUp(data: SignUp) {
  const { email, password } = data;
  const cryptPass = internalBcrypt.hashValue(password);

  await emailNotExist(email);
  await userRepository.insert({ email, password: cryptPass });
}

export async function signIn(data: SignIn) {
  const { email, password } = data;

  const user = await findUserByEmail(email);
  if (!internalBcrypt.compareSync(password, user.password)) {
    throw SIGN_IN_UNAUTHORIZED;
  }

  return jwtTokenGenerate(user, email);
}

function jwtTokenGenerate(user: User, email: string) {
  const private_key = process.env.PRIVATE_KEY ?? "";
  const token = jwt.sign({ user_id: user.id, email }, private_key, {
    expiresIn: "1d",
  });

  return token;
}

async function emailNotExist(email: string) {
  const user = await userRepository.findByEmail(email);
  if (user) {
    throw EMAIL_ALREADY_EXISTS;
  }
}

async function findUserByEmail(email: string) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw SIGN_IN_UNAUTHORIZED;
  }

  return user;
}
