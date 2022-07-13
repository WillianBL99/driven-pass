import AppError from "../config/error.js";
import * as authRepository from "../repositories/authRepository.js";
import { internalBcrypt } from "../utils/encrypt.js";

export interface SignUp {
  email: string;
  password: string;
}

export async function signUp(data: SignUp) {
  const { email, password } = data;
  const cryptPass = internalBcrypt.hashValue(password);

  await validateEmail(email);

  await authRepository.insert({ email, password: cryptPass });
}

async function validateEmail(email: string) {
  const findEmail = await authRepository.findByEmail(email);

  if (findEmail) {
    throw new AppError(
      "Sign-up conflict",
      409,
      "Email already registered",
      "login or register another email"
    );
  }
}
