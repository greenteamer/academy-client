import { Prisma, PrismaClient } from ".prisma/client";
import { ArticleQuery } from "./queries";
const prisma = new PrismaClient();

export const getAllArticles = async () => prisma.article.findMany(ArticleQuery);

export const getArticle = async (where: Prisma.articleWhereUniqueInput) =>
  prisma.article.findUnique({
    where,
    include: ArticleQuery.include,
  });
