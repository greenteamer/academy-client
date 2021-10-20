import { TMasterClass } from "../../services/master-class";

type Combinators = NonNullable<TMasterClass>["sponsor_adcombinator"];

type Sponsor = Combinators[number]["sponsor_sponsor"];
type SponsorType = Combinators[number]["sponsor_sponsortype"];

export type MCSponsorsProps = {
  sponsors: Combinators;
};

export type MCSponsorItemProps = {
  sponsor: Sponsor;
  sponsorType: SponsorType;
};
