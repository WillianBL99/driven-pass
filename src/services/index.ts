import { ACCESS_DANIED } from "../events/ErrosList.js";

type GenericEntity = { userId: number };

export async function checkAccess<T extends GenericEntity | null>(
  entityData: T,
  entityName: string,
  userId: number
) {
  if (entityData?.userId !== userId) {
    throw ACCESS_DANIED(entityName);
  }

  return entityData;
}
