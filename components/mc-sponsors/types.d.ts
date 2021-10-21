import { TMasterClass } from "../../services/master-class";

type Combinators = NonNullable<TMasterClass>["ad_combinator"];

type Sponsor = Combinators[number]["sponsor"];
type SponsorType = Combinators[number]["sponsor_type"];

export type MCSponsorsProps = {
  sponsors: Combinators;
};

export type MCSponsorItemProps = {
  sponsor: Sponsor;
  sponsorType: SponsorType;
};
