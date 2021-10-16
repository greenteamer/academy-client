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
import Link from "next/link";
import { useApollo } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}
export default MyApp;
