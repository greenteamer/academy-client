import Image from "next/image";
import { FC } from "hoist-non-react-statics/node_modules/@types/react";
import { MEDIA_URL, STATIC_URL } from "../../constants";
import { TMasterClass } from "../../services/master-class";
import { MCSponsors } from "../mc-sponsors";
import { getExpertFullName } from "../../utils";

export type Props = { mc: NonNullable<TMasterClass> };

export const MasterClassComponent: FC<Props> = ({ mc }) => (
  <div className="m-t-block-mini">
    <div
      className="component-masterclass border-radius-large masterclass-full-size p-md-block-large p-r"
      style={{
        backgroundImage: `url(${MEDIA_URL}${mc.image})`,
      }}
    >
      <div
        className={`component-masterclass-content ${
          mc.is_dark_theme && "dark-theme"
        }`}
      >
        <h2>{getExpertFullName(mc.expert)}</h2>
        <h2 className="f-w-n">{mc.title}</h2>
        <div className="btn-grip-masterclass d-flex">
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
      <MCSponsors sponsors={mc.ad_combinator} />
    </div>
  </div>
);
