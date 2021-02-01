import GlobalStyles from "../components/styles/GlobalStyles";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
