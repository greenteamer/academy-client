export const MasterClassQuery = {
  include: {
    expert_expert: {
      include: {
        expert_expertcategory: true,
      },
    },
    masterclass_masterclass_targets: {
      include: { masterclass_masterclasstarget: true },
    },
    sponsor_adcombinator: {
      include: {
        sponsor_sponsor: true,
        sponsor_sponsortype: true,
      },
    },
  },
};
