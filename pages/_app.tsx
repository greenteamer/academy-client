import "../styles/globals.css";

// add bootstrap css
// import "bootstrap/dist/css/bootstrap.css";

// ported from django
import "../styles/ported/bootstrap-grid.min.css";
import "../styles/ported/bootstrap-utilities.min.css";
import "../styles/ported/button.css";
import "../styles/ported/experts.css";
import "../styles/ported/fonts.css";
import "../styles/ported/footer.css";
import "../styles/ported/master-classes.css";
import "../styles/ported/news.css";
import "../styles/ported/page.css";
import "../styles/ported/reviews.css";
import "../styles/ported/splide.min.css";
import "../styles/ported/style.css";
import "../styles/ported/video.css";

import type { AppProps } from "next/app";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import client from "../lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ApolloProvider>
  );
}
export default MyApp;
