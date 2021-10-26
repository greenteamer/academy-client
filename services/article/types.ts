import { getAllArticles, getArticle } from "./helpers";

export type TArticles = Awaited<ReturnType<typeof getAllArticles>>;
export type TArticle = Awaited<ReturnType<typeof getArticle>>;
