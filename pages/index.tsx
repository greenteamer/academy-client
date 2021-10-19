import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { MasterclassNameComponent } from "../components/master-class";
import { MasterClass } from "../components/master-class/master-class-component";

type Props = {
  master_classes: Array<MasterClass>;
};

const Home: NextPage<Props> = ({ master_classes }) => {
  const backgroundStyle = {
    background: `url('img/header.png')`,
  };
  console.log(master_classes);
  return (
    <>
      <div className="banner" style={backgroundStyle}>
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
            {/* {master_classes.map((mc) => (
              <>
                <p key={`home-mc-${mc.id}`}>{mc.title}</p>
                {mc.masterclass_masterclass_targets.map(
                  ({ masterclass_masterclasstarget: { title } }) => (
                    <p key={`home-m-${title}`}>{title}</p>
                  )
                )}
              </>
            ))} */}
            {master_classes.map((mc) => (
              <MasterclassNameComponent key={`mc-${mc.id}`} mc={mc} />
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
  const prisma = new PrismaClient();
  const master_classes = await prisma.masterclass_masterclass.findMany({
    include: {
      expert_expert: true,
      masterclass_masterclass_targets: {
        select: { masterclass_masterclasstarget: true },
      },
      sponsor_adcombinator: {
        select: {
          sponsor_sponsor: true,
          sponsor_sponsortype: true,
        },
      },
    },
  });

  return {
    props: {
      master_classes,
    },
  };
}
