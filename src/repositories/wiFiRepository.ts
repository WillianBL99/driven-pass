import { WiFi } from "@prisma/client";
import prisma from "../config/database.js";

export type WiFiCreateData = Omit<WiFi, "id">;

export async function create(wiFiCreateData: WiFiCreateData) {
  await prisma.wiFi.create({ data: wiFiCreateData });
}

export async function getByUserId(userId: number) {
  return await prisma.wiFi.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.wiFi.findUnique({ where: { id } });
}

export async function remove(id: number) {
  return await prisma.wiFi.delete({ where: { id } });
}
