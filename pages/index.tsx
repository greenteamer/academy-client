import {
  masterclass_masterclass,
  masterclass_masterclass_targets,
} from ".prisma/client";
import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";

type Props = {
  master_classes: masterclass_masterclass[];
};

const Home: NextPage<Props> = ({ master_classes }) => {
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
            {master_classes.map((mc) => (
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
  const prisma = new PrismaClient();
  const master_classes = await prisma.masterclass_masterclass.findMany({
    include: { masterclass_masterclass_targets: true },
  });
  return {
    props: {
      master_classes,
    },
  };
}
