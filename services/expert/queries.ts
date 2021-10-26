import { Prisma } from ".prisma/client";

// export const ExpertQuery: Prisma.expertArgs = {
export const ExpertQuery = {
  include: {
    expert_category: true,
    expert_image: true,
  },
};
