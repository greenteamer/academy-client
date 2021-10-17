// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};
import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import client from "../lib/apollo-client";

// type Props = {
//   masterClassList: masterclass_masterclass[];
// };

export const MASTER_CLASSES = gql`
  query allMasterClasses {
    master_classes {
      id
      trailer
      title
      slug
      image
      is_dark_theme
    }
  }
`;

const Home: NextPage<any> = ({ master_classes_static }) => {
  // const { loading, error, data } = useQuery(MASTER_CLASSES);
  // if (error) return <div>Error loading players.</div>;
  // if (loading) return <div>Loading</div>;

  // console.log("master_class_list: ", { data, master_classes_static });
  const backgroundStyle = {
    background: `url('img/header.png')`,
  };
  return (
    <>
      <div className="banner" style={backgroundStyle}>
        {/* <div className="banner" style="background: url('img/header.png')"> */}
        <div className="header-title text-center">
          <div className="container">
            <h1>Инсайты на пути достижений</h1>
            <div className="subtitle color-gray max-width d-inline-block">
              Вдохновение и лайфхаки для достижения небывалых высот в карьере,
              бизнесе и жизни
            </div>
          </div>
        </div>
      </div>
      <div className="container container-masterclass">
        <div className="row">
          <div className="col-md-12 component-masterclass-items color-white">
            {master_classes_static.map((mc) => (
              <p key={`home-mc-${mc.id}`}>{mc.title}</p>
            ))}
            {/* {% for mc in master_class_list %} {% master_class mc %} {% endfor %} */}
            {/* <script>
        $(document).ready(function () {
          $('[data-toggle="tooltip"]').tooltip();
        });
      </script> */}
          </div>
        </div>
      </div>
      <div className="container m-t-section m-md-t-section m-b-section m-md-b-section">
        {/* {% reviews %} */}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps({}) {
  const { data } = await client.query({
    query: MASTER_CLASSES,
  });
  return {
    props: {
      // masterClassList: data?.master_classes,
      master_classes_static: data?.master_classes,
    },
  };
  // const prisma = new PrismaClient();
  // const masterClassList = await prisma.masterclass_masterclass.findMany();
}
