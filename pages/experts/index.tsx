import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PrismaClient, expert } from "@prisma/client";
import { getFullName, getModelUrl } from "../../utils";
import { MEDIA_URL } from "../../constants";

type Props = {
  experts?: expert[];
};

const ExpertsPage: NextPage<Props> = ({ experts }) => {
  if (!experts) return null;
  console.log(experts);
  return (
    <>
      <div className="header-title m-md-t-block-lerge m-t-block-large">
        <div className="container">
          <h1 className="text-center">Эксперты</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-md-0">
            <div className="row-cols-md-2 d-md-flex flex-md-wrap">
              {experts.map((expert) => (
                <div key={`${expert.id}`} className="text-center">
                  <div className="expert-list-item box-shadow border-radius-lite bg-gray">
                    <div className="expert-main-photo">
                      <a
                        href={getModelUrl({
                          modelName: "expert",
                          expertSlug: expert.slug,
                        })}
                      >
                        <img
                          className="img-fluid"
                          src={`${MEDIA_URL}/${expert.main_photo}`}
                        />
                      </a>
                    </div>
                    <h2>
                      <a className="color-white" href={``}>
                        {getFullName(expert)}
                      </a>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();
  const experts = await prisma.expert.findMany();
  return {
    props: {
      experts,
    },
  };
};
