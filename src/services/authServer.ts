import jwt from "jsonwebtoken";
import AppError from "../config/error.js";
import * as userRepository from "../repositories/userRepository.js";
import { internalBcrypt } from "../utils/encrypt.js";

const SIGN_IN_UNAUTHORIZED = new AppError(
  "Sign-in unauthorized",
  401,
  "Email or password are incorrect",
  "Check and try again"
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

  const user = await findAndValidateByEmail(email, userEmailAlreadyExists);

  await userRepository.insert({ email, password: cryptPass });
}

export async function signIn(data: SignIn) {
  const { email, password } = data;
  const user = await findAndValidateByEmail(email, userEmailNotFound);
  if (internalBcrypt.compareSync(password, user.password)) {
    throw SIGN_IN_UNAUTHORIZED;
  }

  const private_key = process.env.PRIVATE_KEY ?? "PRIVATE_KEY";
  const token = jwt.sign({ user_id: user.id, email }, private_key, {
    expiresIn: "1d",
  });

  return token;
}

async function findAndValidateByEmail(
  email: string,
  functionErroValidation: Function
) {
  const user = await userRepository.findByEmail(email);

  functionErroValidation(user);

  return user;
}

function userEmailAlreadyExists({ email }: { email: string }) {
  if (email) {
    throw new AppError(
      "Sign-up conflict",
      409,
      "Email already registered",
      "login or register another email"
    );
  }
}

function userEmailNotFound({ email }: { email: string }) {
  if (email) {
    throw SIGN_IN_UNAUTHORIZED;
  }
}
