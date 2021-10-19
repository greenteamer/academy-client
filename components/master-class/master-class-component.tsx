import {
  masterclass_masterclass,
  masterclass_masterclass_targets,
  masterclass_masterclasstarget,
  expert_expert,
  sponsor_adcombinator,
  sponsor_sponsor,
  sponsor_sponsortype,
} from ".prisma/client";
import Image from "next/image";
import { FC } from "hoist-non-react-statics/node_modules/@types/react";
import { MEDIA_URL, STATIC_URL } from "../../constants";

export type SponsorCombinator = sponsor_adcombinator & {
  sponsor_sponsor: sponsor_sponsor;
  sponsor_sponsortype: sponsor_sponsortype;
};

export type MCTarget = {
  masterclass_masterclasstarget: masterclass_masterclasstarget;
}[];

export type MasterClass = masterclass_masterclass & {
  expert_expert: expert_expert;
  masterclass_masterclass_targets: MCTarget[];
  sponsor_adcombinator: SponsorCombinator[];
};

export type Props = { mc: MasterClass };

export const MasterclassNameComponent: FC<Props> = ({ mc }) => {
  console.log(mc.sponsor_adcombinator);
  const mainSponsor = mc.sponsor_adcombinator.find((i) => i.is_main);
  const restSponsors = mc.sponsor_adcombinator.filter((i) => !i.is_main);
  console.log({ mainSponsor });
  return (
    <div className="m-t-block-mini">
      <div
        className="component-masterclassName border-radius-large masterclassNameName-full-size p-md-block-large p-r"
        style={{
          backgroundImage: `url(${MEDIA_URL}${mc.image})`,
        }}
      >
        <div className="component-masterclassName-content {% if mc.is_dark_theme %}dark-theme{% endif %}">
          <h2>
            {mc.expert_expert.first_name} {mc.expert_expert.last_name}
          </h2>
          <h2 className="f-w-n">{mc.title}</h2>
          <div className="btn-grip-masterclassName d-flex">
            <a className="btn btn-secondary btn-large" href="">
              <i className="icon-play" aria-hidden="true"></i>Трейлер
            </a>
            <a
              className="btn btn-secondary btn-large"
              href="{{ mc.get_absolute_url }}"
            >
              Подробнее
            </a>
          </div>
          <div className="m-w-block">
            <a className="btn btn-primary" href="#">
              Смотреть
            </a>
          </div>
          <div className="bonus-block d-flex align-items-center">
            <div className="d-flex bonus-bt btn align-items-center">
              <div className="bonus-tetle">
                <span>+100 бонусов</span>
              </div>
              <div className="bonus-img">
                <Image
                  alt="some alt"
                  src={`${STATIC_URL}/main/img/bonus-logo.png`}
                  width={36}
                  height={20}
                />
              </div>
            </div>
            <a
              href="#"
              data-toggle="tooltip"
              data-bs-placement="right"
              title="О менталитете чемпиона, формировании бренда и цифровых технологиях!"
            >
              <i className="icon-question" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        {!!mainSponsor && (
          <div
            className="sponsor-block"
            style={{
              backgroundColor: mainSponsor?.sponsor_sponsor.color || "white",
            }}
          >
            <div className="sponsor-items d-flex">
              {!!mainSponsor && (
                <div className="sponsor-item">
                  <span className="d-block">
                    {mainSponsor.sponsor_sponsortype.name}
                  </span>
                  <Image
                    src={`${MEDIA_URL}${mainSponsor.sponsor_sponsor.logo}`}
                    alt="some alt"
                    layout="fill"
                  />
                </div>
              )}
              {restSponsors.map((s, idx) => (
                <div
                  key={`${idx}-${s.sponsor_sponsor.id}`}
                  className="sponsor-item"
                >
                  <span className="d-block">{s.sponsor_sponsor.color}</span>
                  <Image
                    src={`${MEDIA_URL}${s.sponsor_sponsor.logo}`}
                    alt="some alt"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
