import { expert } from ".prisma/client";
import { CLIENT_URL } from "../constants";

type TGetFullName = Pick<expert, "first_name" | "last_name">;

export const getFullName = ({ first_name, last_name }: TGetFullName): string =>
  `${first_name} ${last_name}`;

type TUrlByModel =
  | {
      modelName: "mclass";
      categorySlug: string;
      expertSlug: string;
    }
  | {
      modelName: "expert";
      expertSlug: string;
    }
  | {
      modelName: "news";
      newsSlug: string;
    }
  | {
      modelName: "article";
      articleSlug: string;
    };

export const getModelUrl = (props: TUrlByModel): string => {
  const { modelName } = props;
  switch (modelName) {
    case "expert":
      return `${CLIENT_URL}/experts/${props.expertSlug}`;
    case "mclass":
      const { categorySlug, expertSlug } = props;
      return `${CLIENT_URL}/masterclass/${categorySlug}/${expertSlug}`;
    case "news":
      return `${CLIENT_URL}/novosti/${props.newsSlug}`;
    case "article":
      return `${CLIENT_URL}/stati/${props.articleSlug}`;
  }
};
