import { Prisma, PrismaClient } from ".prisma/client";
import { ExpertQuery } from "./queries";
const prisma = new PrismaClient();

export const getAllExperts = async () => prisma.expert.findMany(ExpertQuery);

export const getExpert = async (where: Prisma.expertWhereUniqueInput) =>
  prisma.expert.findUnique({
    where,
    include: ExpertQuery.include,
  });
