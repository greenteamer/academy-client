import { PrismaClient } from ".prisma/client";
import { MasterClassQuery } from "./queries";
const prisma = new PrismaClient();

export const getAllMasterClasses = async () =>
  prisma.masterclass_masterclass.findMany<typeof MasterClassQuery>(
    MasterClassQuery
  );

export const findFirstMasterClass = async (expert_id: string) =>
  prisma.masterclass_masterclass.findFirst({
    where: { expert_id },
    include: MasterClassQuery.include,
  });
