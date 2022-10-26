import type { AppProps } from "next/app";
import Head from "next/head";

import "./../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adem UYSAL</title>
        <meta name={"viewport"} content={"width=1024"} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
