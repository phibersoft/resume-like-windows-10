import type { AppProps } from "next/app";
import Head from "next/head";

import "./../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adem UYSAL</title>
        <link rel={"manifest"} href={"/manifest.json"} />
        <link rel={"icon"} href={"/favicon.png"} type={"image/png"} />
        {/*   Shortcuts */}
        <link rel={"shortcut icon"} href={"/favicon.png"} type={"image/png"} />
        <link
          rel={"apple-touch-icon"}
          href={"/favicon.png"}
          type={"image/png"}
        />
        <link
          rel={"apple-touch-icon-precomposed"}
          href={"/favicon.png"}
          type={"image/png"}
        />
        <meta name={"description"} content={`Resume of Adem UYSAL`} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
