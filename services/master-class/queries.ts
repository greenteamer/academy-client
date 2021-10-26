import { Prisma } from ".prisma/client";

// export const MasterClassQuery: Prisma.mclassArgs = {
export const MasterClassQuery = {
  include: {
    expert: {
      include: {
        expert_category: true,
      },
    },
    mclass_targets: {
      include: { mclass_target: true },
    },
    ad_combinator: {
      include: {
        sponsor: true,
        sponsor_type: true,
      },
    },
  },
};

// export const MCWithRelatedMCQuery: Prisma.mclassArgs = {
export const MCWithRelatedMCQuery = {
  include: {
    ...MasterClassQuery.include,
    videorelease: true,
    other_mclass: {
      include: {
        ...MasterClassQuery.include,
      },
    },
    ad_single: true,
  },
};
