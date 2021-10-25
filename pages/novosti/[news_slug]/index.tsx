import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient, news } from "@prisma/client";
import { getFullName, getModelUrl } from "../../../utils";
import { MEDIA_URL } from "../../../constants";
import { format } from "date-fns";

type NewsParams = {
  news_slug: string;
};

type Props = {
  news?: news;
};

const NewsPage: NextPage<Props> = ({ news }) => {
  if (!news) return null;
  return (
    <>
      <div className="container m-md-t-block-lerge m-t-block-large">
        <div className="row">
          <div className="col-md-12">
            <div className="news-header m-md-t-block m-t-block">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li
                    className="breadcrumb-item color-gray"
                    aria-current="page"
                  >
                    <i className="icon-left-open" aria-hidden="true" />
                    Новости
                  </li>
                </ol>
              </nav>
              <h1 className="main-title">{news.title}</h1>
              <div className="subtitle color-gray">{news.head_text}</div>
              {/* <span className="d-block publication-data">{news.date_created|date:"d.m.Y"}</span> */}
              <span className="d-block publication-data">
                {format(news.date_created, "MM/dd/yyyy")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container  m-md-t-block m-t-block">
        <div className="row">
          <div className="col-md-12">
            <article className="content bg-gray box-shadow border-radius-large">
              {/* <div>{{ news.text|safe  }}</div> */}
              <div dangerouslySetInnerHTML={{ __html: news.text }} />
            </article>
          </div>
        </div>
      </div>
      <div className="container  m-md-t-section  m-t-section">
        <h2 className="block-title text-center">Читайте также</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bg-gray block-content m-b-block-mini overflow-hidden box-shadow border-radius-large">
              <h2>
                <a
                  className="color-white"
                  href={getModelUrl({ modelName: "news", newsSlug: news.slug })}
                >
                  {news.title}
                </a>
              </h2>
              <div className="color-gray">{news.head_text}</div>
              {/* <span className="d-block publication-data color-gray">{news.date_created|date:"d.m.Y"}</span> */}
              <span className="d-block publication-data color-gray">
                {format(news.date_created, "MM/dd/yyyy")}
              </span>
              <div className="read-more">
                <a
                  className="btn btn-secondary color-white d-md-inline-flex d-block"
                  href={getModelUrl({ modelName: "news", newsSlug: news.slug })}
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;

export const getStaticPaths: GetStaticPaths<NewsParams> = async () => {
  try {
    const prisma = new PrismaClient();
    const news = await prisma.news.findMany();
    const paths = news.map((n) => ({
      params: {
        news_slug: n.slug,
        masterclass: n.slug,
      },
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

export const getStaticProps: GetStaticProps<Props, NewsParams> = async ({
  params,
}) => {
  if (!params) return { notFound: true };
  const prisma = new PrismaClient();
  const news = await prisma.news.findFirst({
    where: { slug: params.news_slug },
  });
  if (!news) return { notFound: true };
  return {
    props: {
      news,
    },
  };
};
