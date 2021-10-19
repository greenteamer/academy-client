// import { gql, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { masterclass_masterclass, PrismaClient } from "@prisma/client";

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
  return <></>;
};

export default Home;

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const masterClassList = await prisma.masterclass_masterclass.findMany();
  return {
    props: {
      masterClassList,
    },
  };
}
