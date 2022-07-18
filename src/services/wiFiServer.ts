import AppError from "../config/error.js";
import * as wiFiRepository from "../repositories/wiFiRepository.js";
import { WiFiCreateData } from "../repositories/wiFiRepository.js";
import { internalCryptr } from "../utils/encrypt.js";

export async function create(wiFiCreateData: WiFiCreateData) {
  const { password } = wiFiCreateData;
  const hashedPass = internalCryptr.encrypt(password);

  await wiFiRepository.create({
    ...wiFiCreateData,
    password: hashedPass,
  });
}

export async function get(
  userId: number,
  queryWiFiId: number | undefined
) {
  if (queryWiFiId) {
    const wiFiId = parseWiFiId(queryWiFiId);
    return await findOneWiFi(wiFiId, userId);
  }

  return await findManyWiFis(userId);
}

export async function remove(userId: number, wiFiId: number) {
  await checkWiFiAccess(userId, wiFiId);

  await wiFiRepository.remove(wiFiId);
}

async function findOneWiFi(wiFiId: number, userId: number) {
  const wiFi = await checkWiFiAccess(userId, wiFiId);
  const password = descriptPassword(wiFi);
  return { ...wiFi, password };
}

async function findManyWiFis(userId: number) {
  const wiFi = await wiFiRepository.getByUserId(userId);
  return wiFi.map((wiFi) => {
    const password = descriptPassword(wiFi);
    return { ...wiFi, password };
  });
}

export function parseWiFiId(queryWiFiId: number) {
  const wiFiId = Number(queryWiFiId);
  if (isNaN(wiFiId)) {
    throw "Invalid Id";
  }

  return wiFiId;
}

function descriptPassword({ password }: { password: string }) {
  return internalCryptr.decrypt(password);
}

async function checkWiFiAccess(userId: number, wiFiId: number) {
  const wiFi = await wiFiRepository.getById(wiFiId);
  if (!wiFi) {
    throw new AppError("Not found", 404, "Not found");
  }

  if (wiFi.userId !== userId) {
    throw new AppError("WiFi access danied", 401, "c a d");
  }

  return wiFi;
}
