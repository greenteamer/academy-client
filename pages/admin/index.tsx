// @ts-ignore
BigInt.prototype.toJSON = function () { return this.toString() }
// import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { masterclass_masterclass, PrismaClient } from '@prisma/client'

type Props = {
  masterClassList: masterclass_masterclass[];
};

// export const MASTER_CLASS_LIST_QUERY = gql`
//   query allMasterClasses {
//     masterClassList {
//       id
//       trailer
//       title
//       slug
//       image
//       isDarkTheme
//       dependencies {
//         id
//         title
//       }
//       targets {
//         id
//         title
//       }
//     }
//   }
// `;

const Home: NextPage<Props> = ({ masterClassList }) => {
  // const { loading, error, data } = useQuery(MASTER_CLASS_LIST_QUERY);
  // if (error) return <div>Error loading players.</div>;
  // if (loading) return <div>Loading</div>;

  // const { masterClassList } = data;
  console.log("master_class_list: ", masterClassList);
  const backgroundStyle = {
    background: `url('img/header.png')`,
  };
  return (
    <>
      <div className="banner" style={backgroundStyle}>
        {/* <div className="banner" style="background: url('img/header.png')"> */}
        <div className="header-title text-center">
          <div className="container">
            <h1>Admin</h1>
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
            {masterClassList.map((mc) => (
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

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const masterClassList = await prisma.masterclass_masterclass.findMany();
  return {
    props: {
      masterClassList,
    },
  };
}
