import { Card } from "@prisma/client";
import { DUPLICATE_LABLE, INVALID_ID, NOT_FOUND } from "../events/ErrosList.js";
import * as cardsRepository from "../repositories/cardsRepository.js";
import { CardCreateData } from "../repositories/cardsRepository.js";
import { internalCryptr } from "../utils/encrypt.js";
import { checkAccess } from "./index.js";

export async function create(cardCreateData: CardCreateData) {
  const { userId, number, lable, password, secureCode } = cardCreateData;
  const hashedPass = internalCryptr.encrypt(password);
  const hasedSecurCode = internalCryptr.encrypt(secureCode);
  
  const findLabel = await cardsRepository.getByUserIdAndNumberAndLable({
    userId,
    number,
    lable,
  });

  if (findLabel) {
    throw DUPLICATE_LABLE;
  }

  await cardsRepository.create({
    ...cardCreateData,
    password: hashedPass,
    secureCode: hasedSecurCode,
  });
}

export async function get(userId: number, queryCardId: number | undefined) {
  if (queryCardId) {
    const cardId = parseId(queryCardId);
    return await findOneCard(cardId, userId);
  }

  return await findManyCards(userId);
}

export async function remove(userId: number, cardId: number) {
  await checkCardAccess(userId, cardId);

  await cardsRepository.remove(cardId);
}

async function findOneCard(entityId: number, userId: number) {
  const card = await checkCardAccess(userId, entityId);
  const password = descript(card.password);
  const secureCode = descript(card.secureCode);
  return { ...card, password, secureCode };
}

async function findManyCards(userId: number) {
  const cards = await cardsRepository.getByUserId(userId);
  return cards.map((card) => {
    const password = descript(card.password);
    const secureCode = descript(card.secureCode);
    return { ...card, password, secureCode };
  });
}

export function parseId(queryCardId: number) {
  const cardId = Number(queryCardId);
  if (isNaN(cardId)) {
    throw INVALID_ID;
  }

  return cardId;
}

function descript(hashedInfo: string) {
  return internalCryptr.decrypt(hashedInfo);
}

async function checkCardAccess(userId: number, cardId: number) {
  const card = await cardsRepository.getById(cardId);
  if( !card ) {
    throw NOT_FOUND;
  }
  return checkAccess<Card>(card, "Card", userId)
}
