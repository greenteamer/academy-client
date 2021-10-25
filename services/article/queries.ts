import { Prisma } from ".prisma/client";

// export const ArticleQuery: Prisma.articleArgs = {
export const ArticleQuery = {
  include: {
    article_content: true,
  },
};
