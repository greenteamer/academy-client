import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { MEDIA_URL, STATIC_URL } from "../../../constants";
import {
  getMCWithRelatedMC,
  getMasterClass,
} from "../../../services/master-class/helpers";
import {
  TMasterClass,
  TMCWithRelatedMC,
} from "../../../services/master-class/types";
import { MCSponsors } from "../../../components/mc-sponsors";
import { Trailer } from "../../../components/trailer";
import { getFullName } from "../../../utils";
import { MasterClassComponent } from "../../../components/master-class";
import { getExpert, TExpert } from "../../../services/expert";

type ExpertRoteParams = {
  expert_slug: string;
};

type Props = {
  expert?: TExpert;
  masterClass?: TMasterClass;
};

const ExpertPage: NextPage<Props> = ({ masterClass, expert }) => {
  const router = useRouter();
  if (!expert || !masterClass) return null;
  const contentImage = expert.expert_image.find((i) => i.is_content_image);
  return (
    <div className="m-md-t-block-lerge m-t-block-large overflow-hidden">
      <div className="m-md-t-block m-t-block">
        <div className="container">
          <div className="row justify-content-between  align-items-center">
            <div className="col-md-auto d-md-none d-block">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li
                    className="breadcrumb-item color-gray"
                    aria-current="page"
                  >
                    <i className="icon-left-open" aria-hidden="true" />
                    Эксперты
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-auto max-width order-2 order-md-1">
              <nav aria-label="breadcrumb" className="d-none d-md-block">
                <ol className="breadcrumb">
                  <li
                    className="breadcrumb-item color-gray"
                    aria-current="page"
                  >
                    <i className="icon-left-open" aria-hidden="true" />
                    Эксперты
                  </li>
                </ol>
              </nav>
              <h1 className="main-title">{getFullName(expert)}</h1>
            </div>
            <div className="col-md-auto order-1 order-md-2">
              <div className="expert-main-photo">
                <img
                  className="img-fluid"
                  src={`${MEDIA_URL}${expert.main_photo}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  m-md-t-block m-t-block">
        <div className="row">
          <div className="col-md-12">
            <article className="bg-gray box-shadow border-radius-large color-gray">
              <div className="content">
                <div className="anchor-link m-b-block-large m-md-b-block-lerge">
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#expert-bio"
                  >
                    Биография
                  </a>
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#"
                  >
                    Профессиональная карьера
                  </a>
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#expert-personal-life"
                  >
                    Личная жизнь
                  </a>
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#expert-statistic"
                  >
                    Статистика выступлений
                  </a>
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#expert-achievements"
                  >
                    Достижения
                  </a>
                  <a
                    className="transition d-block color-gray text-decoration"
                    href="#expert-masterclass"
                  >
                    Подробнее о мастер-классе Роман Павлюченко
                  </a>
                </div>
                <div
                  id="expert-bio"
                  className="anchor-block m-b-block-large m-md-b-block-lerge"
                >
                  <h2>Биография</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expert.bio,
                    }}
                  />
                </div>
                <div
                  id="expert-masterclass"
                  className="anchor-block m-b-block-large m-md-b-block-lerge"
                >
                  <p className="color-white">
                    Подробнее смотрите в мастер-классе:
                  </p>
                  <div
                    className="component-masterclass border-radius-large masterclass-base-size"
                    style={{
                      background: `url(${MEDIA_URL}${masterClass.image})`,
                    }}
                  >
                    <div className="component-masterclass-content {% if master_class.is_dark_theme %}dark-theme{% endif %}">
                      <h2>{getFullName(expert)}</h2>
                      <h2 className="f-w-n">{masterClass.title}</h2>
                      <div className="btn-grip-masterclass d-flex">
                        <a className="btn btn-secondary btn-large" href="">
                          <i className="icon-play" aria-hidden="true" />
                          Трейлер
                        </a>
                        <a className="btn btn-secondary btn-large" href="">
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
                            <img
                              className="img-fluid"
                              src={`${STATIC_URL}/main/img/bonus-logo.png`}
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-bs-placement="right"
                          title="О менталитете чемпиона, формировании бренда и цифровых технологиях!"
                        >
                          <i className="icon-question" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <script>
                    {/* { 
              $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip();
              });
 } */}
                  </script>
                </div>
                <div
                  id="expert-personal-life"
                  className="anchor-block m-b-block-large m-md-b-block-lerge"
                >
                  <h2>Личная жизнь</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expert.personal_life,
                    }}
                  />
                </div>
              </div>
              {contentImage && (
                <div className="content-img">
                  <div className="m-b-block-large  m-md-b-block-lerge ">
                    <div className="d-flex border-radius-large justify-content-center">
                      <img
                        key={`${contentImage.id}`}
                        className="img-responsive"
                        src={`${MEDIA_URL}${contentImage.image}`}
                      />
                    </div>
                    <span className="image-description">
                      {contentImage.description}
                    </span>
                  </div>
                </div>
              )}
              <div className="content">
                <div
                  id="expert-statistic"
                  className="anchor-block m-b-block-large m-md-b-block-lerge"
                >
                  <h2>Статистика выступлений</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expert.statistic,
                    }}
                  />
                </div>
                <div
                  id="expert-achievements"
                  className="anchor-block m-b-block-large m-md-b-block-lerge"
                >
                  <h2>Достижения</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expert.achievements,
                    }}
                  />
                </div>
              </div>
              <div className="content-img">
                <div id="geler-splide" className="geler-expert splide">
                  <div className="splide__track">
                    <div className="splide__list">
                      {expert.expert_image.map((image) => (
                        <div
                          key={`${image.id}`}
                          className="splide__slide border-radius-large"
                        >
                          <img src={`${MEDIA_URL}${image}`} />
                          {/* <span className="image-description">{content_image.description}</span> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="splide__arrows d-none d-md-block">
                    <button className="splide__arrow splide__arrow--prev icon-left-open" />
                    <button className="splide__arrow splide__arrow--next icon-right-open" />
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="m-b-block-large m-md-b-block-lerge">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expert.last_content,
                    }}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPage;

export const getStaticPaths: GetStaticPaths<ExpertRoteParams> = async () => {
  try {
    const prisma = new PrismaClient();
    const experts = await prisma.expert.findMany();
    const paths = experts.map((e) => ({
      params: { expert_slug: e.slug },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    // console.log(">> path error: ", e);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps<Props, ExpertRoteParams> = async ({
  params,
}) => {
  if (!params) return { notFound: true };
  const expert = await getExpert({
    slug: params.expert_slug,
  });
  if (!expert) return { notFound: true };
  const masterClass = await getMasterClass({ expert_id: expert.id });
  if (!masterClass) return { notFound: true };
  return {
    props: {
      masterClass,
      expert,
    },
  };
};
