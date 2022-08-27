import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import reset from "../styles/reset";
import global from "styles/global";
import "../styles/global.css";
import useFontAwesome from "hooks/common/useFontAwesome";

function MyApp({ Component, pageProps }: AppProps) {
  useFontAwesome();

  return (
    <>
      <Global styles={[reset, global]} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
