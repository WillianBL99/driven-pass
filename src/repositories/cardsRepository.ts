import { Card } from "@prisma/client";
import prisma from "../config/database.js";

export type CardCreateData = Omit<Card, "id">;
export type FindSameCard = Pick<Card, "userId" | "number" | "lable">;

export async function create(cardCreateData: CardCreateData) {
  await prisma.card.create({ data: cardCreateData });
}

export async function getByUserId(userId: number) {
  return await prisma.card.findMany({ where: { userId } });
}

export async function getByUserIdAndNumberAndLable(findSameCard: FindSameCard) {
  const { userId, number, lable } = findSameCard;
  const [card] = await prisma.card.findMany({
    where: { userId, AND: { number, AND: { lable } } },
  });
  return card;
}

export async function getById(id: number) {
  return await prisma.card.findUnique({ where: { id } });
}

export async function remove(id: number) {
  return await prisma.card.delete({ where: { id } });
}
