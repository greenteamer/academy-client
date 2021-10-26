import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { mclass, PrismaClient } from "@prisma/client";

type Props = {
  masterClassList: mclass[];
};

const Admin: NextPage<Props> = ({ masterClassList }) => {
  return <></>;
};

export default Admin;

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const masterClassList = await prisma.mclass.findMany();
  return {
    props: {
      masterClassList,
    },
  };
}
