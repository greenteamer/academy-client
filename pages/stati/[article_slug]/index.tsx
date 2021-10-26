import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { MEDIA_URL } from "../../../constants";
import { format } from "date-fns";
import { getArticle, TArticle } from "../../../services/article";

type ArticleParams = {
  article_slug: string;
};

type Props = {
  article: TArticle;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  if (!article) return null;
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
                    Новости
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
                    Статьи
                  </li>
                </ol>
              </nav>
              <h1 className="main-title">{article.title}</h1>
              <div className="subtitle color-gray">{article.description}</div>
              <span className="d-block publication-data">
                {format(article.date_created, "MM/dd/yyyy")}
              </span>
            </div>
            <div className="col-md-auto order-1 order-md-2">
              <div className="article-image">
                <img
                  className="img-fluid border-radius-lite"
                  src={`${MEDIA_URL}/${article.image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-t-block m-md-t-block">
        <div className="row">
          <div className="col-md-12">
            <article className="content color-gray bg-gray box-shadow border-radius-large">
              <div className="anchor-link m-b-block-large m-md-b-block-lerge">
                {article.article_content.map((c) => (
                  <a
                    key={article.id}
                    className="transition d-block color-gray text-decoration"
                    href={`#article-${c.id}`}
                  >
                    {c.title}
                  </a>
                ))}
              </div>
              <div className="article-content">
                {article.article_content.map((c) => (
                  <div
                    key={article.id}
                    id="article-{{ content.id }}"
                    className="m-b-block-large m-md-b-block-lerge anchor-block"
                  >
                    <h2>{c.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: c.text }} />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="container  m-md-t-section  m-t-section">
        <h2 className="block-title text-center">Читайте также</h2>
      </div>
      {/* список статей компонент */}
    </div>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths<ArticleParams> = async () => {
  try {
    const prisma = new PrismaClient();
    const articles = await prisma.article.findMany();
    const paths = articles.map((article) => ({
      params: {
        article_slug: article.slug,
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

export const getStaticProps: GetStaticProps<Props, ArticleParams> = async ({
  params,
}) => {
  if (!params) return { notFound: true };
  const article = await getArticle({ slug: params.article_slug });
  if (!article) return { notFound: true };
  return {
    props: {
      article,
    },
  };
};
