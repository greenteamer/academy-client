import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { MEDIA_URL } from "../../../constants";
import { findFirstMasterClass } from "../../../services/master-class/helpers";
import { TMasterClass } from "../../../services/master-class/types";
import { MCSponsors } from "../../../components/mc-sponsors";
import { Trailer } from "../../../components/trailer";

type MasterClassRoteParams = {
  category: string;
  expert: string;
};

type Props = {
  masterClass?: TMasterClass;
};

const MasterClassPage: NextPage<Props> = ({ masterClass }) => {
  const router = useRouter();
  const { category } = router.query;
  console.log(masterClass);
  if (!masterClass) return null;
  return (
    <>
      <div
        className="masterclass-header sponsor-add component-masterclass masterclass-full-size"
        style={{ background: `url(${MEDIA_URL}${masterClass?.image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-md-t-block-lerge m-t-block-lerge p-0 p-r">
              <div className="d-flex flex-flow-column flex-wrap">
                <div className="banner-title component-masterclass-title">
                  <h1>
                    {masterClass.expert_expert.first_name}{" "}
                    {masterClass.expert_expert.last_name}
                    <span className="f-w-n d-flex">{masterClass.title}</span>
                  </h1>
                </div>
                <div className="component-masterclass-content order-3 order-md-1 {% if master_class.is_dark_theme %}dark-theme{% endif %}">
                  <div className="btn-grip-masterclass d-flex">
                    <a
                      className="btn btn-secondary btn-large color-white"
                      href="#video-trailer"
                    >
                      <i className="icon-play" aria-hidden="true"></i>Трейлер
                    </a>
                    <a
                      className="btn btn-secondary btn-large color-white"
                      href="#video-list"
                    >
                      <i className="icon-menu" aria-hidden="true"></i>Программа
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
                          src="{% static '/main/img/bonus-logo.png' %}"
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
                      <i className="icon-question" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <MCSponsors sponsors={masterClass.sponsor_adcombinator} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container m-t-block-mini masterclass-page-bio">
  <div className="row bg-gray block-content overflow-hidden box-shadow border-radius-large color-gray">
    <div className="col-md-2 ps-md-0 pe-md-0">
      <img className="img-fluid b-r-50" src="/media/{{ master_class.expert.main_photo }}" />
    </div>
    <div className="col-md-10">
      <div className="master-class-body m-t-block-mid m-md-t-block-mid">
        <h2>{{ master_class.expert.name }}</h2>
        {{ master_class.expert.bio|safe }}
      </div>
    </div>
  </div>
</div> */}
      {/* {% if master_class.single_ad %}
  <div className="container m-t-block-mini banner-sponsor">
    <div className="d-flex justify-content-center">
      <img className="img-fluid text-center" src="/media/{{ master_class.single_ad.image }}" />
    </div>
  </div>
{% endif %} */}
      {/* <div className="container m-t-block-mini video-list">
  <div className="row bg-gray box-shadow border-radius-large color-gray">
    <div className="col-md-12">
      <div className=" block-content">
        <div className="info-videoreleases color-gray">
          <h2>Кому подойдёт этот мастер-класс?</h2>
          <div className="d-flex flex-wrap targets-videoreleases-items">
            {% for target in master_class.targets.all %}
            <div className="d-flex align-items-center col-auto"><span>{{ target.title }}</span><i className="icon-circle color-red" aria-hidden="true"></i></div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
      <Trailer link={masterClass.trailer} />
      {/* <div id="video-list" className="container m-t-block-mini video-list">
  <div className="row bg-gray box-shadow border-radius-large color-gray">
    <div className="col-md-12">
      <div className="block-content">
        <div className="row-cols-md-3 justify-content-md-between d-md-flex video-list-header">
          <div className="info-videoreleases color-gray">
            <h2>Программа</h2>
            <div className="d-flex flex-wrap targets-videoreleases-items">
              <div className="d-flex align-items-center col-auto"><span>10 выпусков</span><i className="icon-circle color-red" aria-hidden="true"></i></div>
              <div className="d-flex align-items-center col-auto"><span>1 час 45 минут</span><i className="icon-circle color-red" aria-hidden="true"></i></div>
            </div>
          </div>
          <div className="btn-grip-video">
            <div>
              <div>
                <a className="btn btn-primary" href="#"><span>799₽</span> Купить</a>
              </div>
              <div className="bonus-block d-flex align-items-center">
                <div className="d-flex bonus-bt btn btn-secondary align-items-center color-white">
                  <div className="bonus-tetle">
                    <span>+100 бонусов</span>
                  </div>
                  <div className="bonus-img">
                    <img src="{% static '/main/img/bonus-logo.png' %}" alt="">
                  </div>
                </div>
                <a href="#" data-toggle="tooltip" data-bs-placement="right" title="О менталитете чемпиона, формировании бренда и цифровых технологиях!">
                  <i className="icon-question color-gray" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="line"></span>
        <div className="video-list-body m-md-t-block-mid">
        {% for vr in video_releases %}
          <div className="video-list-item row align-items-center border-radius-lite m-md-t-block-mid m-md-b-block-mid">
            <div className="col-md-3 video-list-video p-md-0">
              <iframe className="border-radius-large" src="{{ master_class.trailer }}" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <div className="col-md-9 video-list-des">
              <h3>{{ vr.title }}</h3>
              <div className="color-gray">
                <span>{{ vr.description }}</span>
              </div>
              <div className="video-list-btn btn btn-secondary close-video  d-md-inline-flex align-items-center">
                <a className="color-gray" href="">Доступно после покупки</a>
              </div>
            </div>
          </div>
        {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div> */}
      {/* <div className="container m-t-section m-md-t-section m-b-section m-md-b-section">
  <div className="row">
    <div className="col-md-12 p-md-0">
      {% reviews %}
    </div>
  </div>
</div> */}
      {/* <div className="container  m-md-t-section  m-t-section">
  <h2 className="block-title text-center">Смотрите также</h2>
</div> */}
      <div className="container component-masterclass-block">
        <div className="row">
          <div className="col-md-12 p-md-0 p-r">
            <div className="row-cols-md-2 d-md-flex flex-md-wrap component-masterclass-items">
              {/* {% for mc in master_class.dependencies.all %}
        <div>
          <div className="component-masterclass border-radius-large masterclass-base-size p-r" style="background: url(/media/{{ mc.image }});">
            <div className="component-masterclass-content {% if mc.is_dark_theme %}dark-theme{% endif %}">
              <h2>{{ mc.expert.name }}</h2>
              <h2 className="f-w-n">{{ mc.title }}</h2>
              <div className="btn-grip-masterclass d-flex">
                <a className="btn btn-secondary btn-large" href=""><i className="icon-play" aria-hidden="true"></i>Трейлер</a>
                <a className="btn btn-secondary btn-large" href="">Подробнее</a>
              </div>
              <div className="m-w-block">
                <a className="btn btn-primary" href="#">Смотреть</a>
              </div>
              <div className="bonus-block d-flex align-items-center">
                <div className="d-flex bonus-bt btn align-items-center">
                  <div className="bonus-tetle">
                    <span>+100 бонусов</span>
                  </div>
                  <div className="bonus-img">
                    <img src="{% static '/main/img/bonus-logo.png' %}" alt="">
                  </div>
                </div>
                <a href="#" data-toggle="tooltip" data-bs-placement="right" title="О менталитете чемпиона, формировании бренда и цифровых технологиях!">
                  <i className="icon-question" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="sponsor-block" style="background-color:{{ master_class.main_ad_combinator.sponsor.color }}">
              <div className="sponsor-items d-flex">
                <div className="sponsor-item">
                  <span className="d-block">{{ master_class.main_ad_combinator.sponsor_type.name }}</span>
                  <img src="/media/{{ master_class.main_ad_combinator.sponsor.logo }}" />
                </div>
                {% for ac in master_class.rest_ad_combinators %}
                <div className="sponsor-item">
                  <span className="d-block">{{ ac.sponsor_type.name }}</span>
                  <img src="/media/{{ ac.sponsor.logo }}" />
                </div>
                {% endfor %}
              </div>
            </div>
          </div>
        </div>
        {% endfor %} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterClassPage;

export const getStaticPaths: GetStaticPaths<MasterClassRoteParams> =
  async () => {
    const prisma = new PrismaClient();
    const categories = await prisma.expert_expertcategory.findMany();
    const experts = await prisma.expert_expert.findMany({
      include: {
        expert_expertcategory: true,
      },
    });
    const paths = experts.map((e) => ({
      params: { category: e.expert_expertcategory.title, expert: e.slug },
    }));
    return {
      paths,
      fallback: true,
    };
  };

export const getStaticProps: GetStaticProps<Props, MasterClassRoteParams> =
  async ({ params }) => {
    if (!params) return { notFound: true };
    const prisma = new PrismaClient();
    const expert = await prisma.expert_expert.findUnique({
      where: { slug: params.expert },
    });
    if (!expert) return { notFound: true };
    const masterClass = await findFirstMasterClass(expert?.id);
    if (!masterClass) return { notFound: true };
    return {
      props: {
        masterClass,
      },
    };
  };
