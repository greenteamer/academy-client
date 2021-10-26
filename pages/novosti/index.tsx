import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient, news } from "@prisma/client";
import { getFullName, getModelUrl } from "../../utils";
import { MEDIA_URL } from "../../constants";
import { format } from "date-fns";

type Props = {
  news?: news[];
};

const NewsListPage: NextPage<Props> = ({ news }) => {
  if (!news) return null;
  return (
    <>
      <div className="header-title m-md-t-block-lerge m-t-block-large">
        <div className="container">
          <h1 className="text-center">Новости</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((n) => (
            <div key={`${n.id}`} className="col-md-12">
              <div className="bg-gray block-content m-b-block-mini overflow-hidden box-shadow border-radius-large">
                <h2>
                  <a
                    className="color-white"
                    href={getModelUrl({ modelName: "news", newsSlug: n.slug })}
                  >
                    {n.title}
                  </a>
                </h2>
                <div className="color-gray">{n.head_text}</div>
                {/* <span className="d-block publication-data color-gray">{n.date_created|date:"d.m.Y"}</span> */}
                <span className="d-block publication-data color-gray">
                  {format(n.date_created, "MM/dd/yyyy")}
                </span>
                <div className="read-more m-md-t-block m-t-block">
                  <a
                    className="btn btn-secondary color-white d-md-inline-flex d-block"
                    href={getModelUrl({ modelName: "news", newsSlug: n.slug })}
                  >
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <ul className="pagination">
                <li className="page-item active">
                  <span>1</span>
                </li>
                <li className="page-item">
                  <a className="color-gray" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="color-gray" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <span className="color-gray">...</span>
                </li>
                <li>
                  <a className="color-gray" href="#">
                    18
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsListPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();

  const news = await prisma.news.findMany();
  return {
    props: {
      news,
    },
  };
};
