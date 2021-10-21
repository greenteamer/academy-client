import { Prisma, PrismaClient } from ".prisma/client";
import { MasterClassQuery, MCWithRelatedMCQuery } from "./queries";
const prisma = new PrismaClient();

export const getAllMasterClasses = async () =>
  prisma.mclass.findMany(MasterClassQuery);

export const getMasterClass = async (where: Prisma.mclassWhereInput) =>
  prisma.mclass.findFirst({
    where,
    include: MasterClassQuery.include,
  });

export const getMCWithRelatedMC = async (where: Prisma.mclassWhereInput) =>
  prisma.mclass.findFirst({
    where,
    include: MCWithRelatedMCQuery.include,
  });
