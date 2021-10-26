import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient, article } from "@prisma/client";
import { getFullName, getModelUrl } from "../../utils";
import { MEDIA_URL } from "../../constants";
import { format } from "date-fns";

type Props = {
  articles?: article[];
};

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  if (!articles) return null;
  return (
    <>
      <div className="header-title m-md-t-block-lerge m-t-block-large">
        <div className="container">
          <h1 className="text-center">Статьи</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-12">
              <div className="bg-gray d-flex flex-wrap justify-content-between  align-items-center article-list-items overflow-hidden box-shadow border-radius-large">
                <div className="col-md-auto col-12 order-2 order-md-1 max-width">
                  <h2>
                    <a
                      className="color-white"
                      href="{{ article.get_absolute_url }}"
                    >
                      {article.title}
                    </a>
                  </h2>
                  <div className="color-gray">{article.description}</div>
                  <span className="d-block publication-data color-gray">
                    {format(article.date_created, "MM/dd/yyyy")}
                  </span>
                  <div className="read-more">
                    <a
                      className="btn btn-secondary color-white d-md-inline-flex d-block"
                      href={getModelUrl({
                        modelName: "article",
                        articleSlug: article.slug,
                      })}
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
                <div className="col-md-auto order-1 order-md-2">
                  <div className="article-image">
                    <img
                      className="img-fluid border-radius-lite"
                      src={`${MEDIA_URL}${article.image}`}
                    />
                  </div>
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

export default ArticlesPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();
  return {
    props: {
      articles,
    },
  };
};
