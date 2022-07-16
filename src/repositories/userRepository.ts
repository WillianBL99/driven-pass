import { User } from "@prisma/client";
import prisma from "../config/database.js";

export type UserCreate = Omit<User, "id" | "createdAt">;

export async function findByEmail(email: string) {
  const user = await prisma.user.findFirst({ where: { email } });
  return user;
}

export async function insert(UserCreateData: UserCreate) {
  await prisma.user.create({ data: UserCreateData });
}
