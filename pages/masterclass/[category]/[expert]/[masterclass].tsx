import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { MEDIA_URL, STATIC_URL } from "../../../../constants";
import { getMCWithRelatedMC } from "../../../../services/master-class/helpers";
import { TMCWithRelatedMC } from "../../../../services/master-class/types";
import { MCSponsors } from "../../../../components/mc-sponsors";
import { Trailer } from "../../../../components/trailer";
import { getFullName } from "../../../../utils";
import { MasterClassComponent } from "../../../../components/master-class";

type MasterClassRoteParams = {
  category: string;
  expert: string;
  masterclass: string;
};

type Props = {
  masterClass?: TMCWithRelatedMC;
};

const MasterClassPage: NextPage<Props> = ({ masterClass }) => {
  const router = useRouter();
  const { category } = router.query;
  if (!masterClass) return null;
  return (
    <>
      <div
        className="masterclass-header sponsor-add component-masterclass masterclass-full-size"
        style={{ background: `url(${MEDIA_URL}${masterClass.image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-md-t-block-lerge m-t-block-lerge p-0 p-r">
              <div className="d-flex flex-flow-column flex-wrap">
                <div className="banner-title component-masterclass-title">
                  <h1>
                    {getFullName(masterClass.expert)}
                    <span className="f-w-n d-flex">{masterClass.title}</span>
                  </h1>
                </div>
                <div className="component-masterclass-content order-3 order-md-1 {% if master_class.is_dark_theme %}dark-theme{% endif %}">
                  <div className="btn-grip-masterclass d-flex">
                    <a
                      className="btn btn-secondary btn-large color-white"
                      href="#video-trailer"
                    >
                      <i className="icon-play" aria-hidden="true" />
                      Трейлер
                    </a>
                    <a
                      className="btn btn-secondary btn-large color-white"
                      href="#video-list"
                    >
                      <i className="icon-menu" aria-hidden="true" />
                      Программа
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
                        {/* <img
                          src={`${STATIC_URL}/main/img/bonus-logo.png`}
                          alt=""
                        /> */}
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
                <MCSponsors sponsors={masterClass.ad_combinator} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-t-block-mini masterclass-page-bio">
        <div className="row bg-gray block-content overflow-hidden box-shadow border-radius-large color-gray">
          <div className="col-md-2 ps-md-0 pe-md-0">
            <img
              className="img-fluid b-r-50"
              src={`${MEDIA_URL}${masterClass.expert.main_photo}`}
            />
          </div>
          <div className="col-md-10">
            <div className="master-class-body m-t-block-mid m-md-t-block-mid">
              <h2>{getFullName(masterClass.expert)}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: masterClass.expert.bio,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {masterClass.single_ad_id && (
        <div className="container m-t-block-mini banner-sponsor">
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid text-center"
              src={`${MEDIA_URL}${masterClass.ad_single &&
                masterClass.ad_single.image}`}
            />
          </div>
        </div>
      )}
      <div className="container m-t-block-mini video-list">
        <div className="row bg-gray box-shadow border-radius-large color-gray">
          <div className="col-md-12">
            <div className=" block-content">
              <div className="info-videoreleases color-gray">
                <h2>Кому подойдёт этот мастер-класс?</h2>
                <div className="d-flex flex-wrap targets-videoreleases-items">
                  {masterClass.mclass_targets.map((target) => (
                    <div
                      key={`${target.id}`}
                      className="d-flex align-items-center col-auto"
                    >
                      <span>{target.mclass_target.title}</span>
                      <i className="icon-circle color-red" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trailer link={masterClass.trailer} />
      <div id="video-list" className="container m-t-block-mini video-list">
        <div className="row bg-gray box-shadow border-radius-large color-gray">
          <div className="col-md-12">
            <div className="block-content">
              <div className="row-cols-md-3 justify-content-md-between d-md-flex video-list-header">
                <div className="info-videoreleases color-gray">
                  <h2>Программа</h2>
                  <div className="d-flex flex-wrap targets-videoreleases-items">
                    <div className="d-flex align-items-center col-auto">
                      <span>10 выпусков</span>
                      <i className="icon-circle color-red" aria-hidden="true" />
                    </div>
                    <div className="d-flex align-items-center col-auto">
                      <span>1 час 45 минут</span>
                      <i className="icon-circle color-red" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="btn-grip-video">
                  <div>
                    <div>
                      <a className="btn btn-primary" href="#">
                        <span>799₽</span> Купить
                      </a>
                    </div>
                    <div className="bonus-block d-flex align-items-center">
                      <div className="d-flex bonus-bt btn btn-secondary align-items-center color-white">
                        <div className="bonus-tetle">
                          <span>+100 бонусов</span>
                        </div>
                        <div className="bonus-img">
                          <img
                            src={`${STATIC_URL}/main/img/bonus-logo.png`}
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-bs-placement="right"
                        title="О менталитете чемпиона, формировании бренда и цифровых технологиях!"
                      >
                        <i
                          className="icon-question color-gray"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span className="line" />
              <div className="video-list-body m-md-t-block-mid">
                {masterClass.videorelease.map((v) => (
                  <div
                    key={`vr-${v.id}`}
                    className="video-list-item row align-items-center border-radius-lite m-md-t-block-mid m-md-b-block-mid"
                  >
                    <div className="col-md-3 video-list-video p-md-0">
                      <iframe
                        className="border-radius-large"
                        src={v.link}
                        width="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>
                    <div className="col-md-9 video-list-des">
                      <h3>{v.title}</h3>
                      <div className="color-gray">
                        <span>{v.description}</span>
                      </div>
                      <div className="video-list-btn btn btn-secondary close-video  d-md-inline-flex align-items-center">
                        <a className="color-gray" href="">
                          Доступно после покупки
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container m-t-section m-md-t-section m-b-section m-md-b-section">
    <div className="row">
      <div className="col-md-12 p-md-0">
        {% reviews %}
      </div>
    </div>
  </div> */}
      <div className="container  m-md-t-section  m-t-section">
        <h2 className="block-title text-center">Смотрите также</h2>
      </div>
      <div className="container component-masterclass-block">
        <div className="row">
          <div className="col-md-12 p-md-0 p-r">
            <div className="row-cols-md-2 d-md-flex flex-md-wrap component-masterclass-items">
              {masterClass.other_mclass.map((item) => (
                <MasterClassComponent key={`other-mc-${item.id}`} mc={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterClassPage;

export const getStaticPaths: GetStaticPaths<
  MasterClassRoteParams
> = async () => {
  try {
    const prisma = new PrismaClient();
    const masterClasses = await prisma.mclass.findMany({
      include: {
        expert: {
          include: {
            expert_category: true,
          },
        },
      },
    });
    const paths = masterClasses.map((mc) => ({
      params: {
        category: mc.expert.expert_category.title,
        expert: mc.expert.slug,
        masterclass: mc.slug,
      },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps<
  Props,
  MasterClassRoteParams
> = async ({ params }) => {
  if (!params) return { notFound: true };
  const prisma = new PrismaClient();
  const expert = await prisma.expert.findUnique({
    where: { slug: params.expert },
    select: { id: true },
  });
  if (!expert) return { notFound: true };
  const masterClass = await getMCWithRelatedMC({ expert_id: expert.id });
  if (!masterClass) return { notFound: true };
  return {
    props: {
      masterClass,
    },
  };
};
