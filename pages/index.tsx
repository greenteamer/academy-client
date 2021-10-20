import type { GetStaticProps, NextPage } from "next";
import { MasterclassNameComponent } from "../components/master-class";
import {
  getAllMasterClasses,
  TMasterClasseses,
} from "../services/master-class";

type Props = {
  master_classes: TMasterClasseses;
};

const Home: NextPage<Props> = ({ master_classes }) => {
  const backgroundStyle = {
    background: `url('img/header.png')`,
  };
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const master_classes = await getAllMasterClasses();
  return {
    props: {
      master_classes,
    },
  };
};
