import Image from "next/image";
import { MEDIA_URL } from "../../constants";
import { MCSponsorsProps, MCSponsorItemProps } from "./types";

export const MCSponsors = ({ sponsors }: MCSponsorsProps) => {
  const main = sponsors.find((i) => i.is_main);
  const rest = sponsors.filter((i) => !i.is_main);
  if (!main?.sponsor_sponsor || !main.sponsor_sponsortype) return null;
  const backgroundColor = main.sponsor_sponsor.color;
  return (
    <div
      className="sponsor-block"
      style={{
        backgroundColor,
      }}
    >
      <div className="sponsor-items d-flex">
        {rest.map((s, idx) => (
          <SponsorItem
            key={`${idx}-${s.id}`}
            sponsor={s.sponsor_sponsor}
            sponsorType={s.sponsor_sponsortype}
          />
        ))}
      </div>
    </div>
  );
};

const SponsorItem = ({ sponsor, sponsorType }: MCSponsorItemProps) =>
  sponsor && sponsorType ? (
    <div className="sponsor-item">
      <span className="d-block">{sponsorType.name}</span>
      <Image src={`${MEDIA_URL}${sponsor.logo}`} alt="some alt" layout="fill" />
    </div>
  ) : null;
