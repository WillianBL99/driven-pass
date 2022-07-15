import bcrypt, { compareSync } from "bcrypt";
import Cryptr from "cryptr";
import "../config/setup.js";
const cryptr = new Cryptr(process.env.CRYPTR_SECRET ?? "SECRET");

export const internalCryptr = {
  encrypt,
  decrypt: cryptr.decrypt,
};

export const internalBcrypt = {
  hashValue,
  compareSync,
};

function encrypt(value: string) {
  return cryptr.encrypt(value);
}

function hashValue(value: string) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedValue = bcrypt.hashSync(value, salt);

  return hashedValue;
}
