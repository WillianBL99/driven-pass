import AppError from "../config/error.js";
import * as cardsRepository from "../repositories/cardsRepository.js";
import { CardCreateData } from "../repositories/cardsRepository.js";
import { internalCryptr } from "../utils/encrypt.js";

const DUPLICATE_LABLE = new AppError(
  "Duplicate lable",
  409,
  "Lable already exists",
  "Insert a different label"
);

export async function create(cardCreateData: CardCreateData) {
  const { userId, number, lable, password, secureCode } = cardCreateData;
  const hashedPass = internalCryptr.encrypt(password);
  const hasedSecurCode = internalCryptr.encrypt(secureCode);

  console.log({ userId, number, lable });
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
  await checkAccess(userId, cardId);

  await cardsRepository.remove(cardId);
}

async function findOneCard(entityId: number, userId: number) {
  const card = await checkAccess(userId, entityId);
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
    throw "Invalid Id";
  }

  return cardId;
}

function descript(hashedInfo: string) {
  return internalCryptr.decrypt(hashedInfo);
}

async function checkAccess(userId: number, id: number) {
  const entity = await cardsRepository.getById(id);
  if (!entity) {
    throw new AppError("Not found", 404, "Not found");
  }

  if (entity.userId !== userId) {
    throw new AppError("Card access danied", 401, "c a d");
  }

  return entity;
}
