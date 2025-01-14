import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { decodeTheme, initTheme } from "../utils/theme";

export default function Document() {
  return (
    <Html className={decodeTheme(initTheme()).replace("auto-", "")} lang="zh">
      <Head>
        <Script src="/initTheme.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
