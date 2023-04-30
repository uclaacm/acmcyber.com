import Head from "next/head";

import type { AppProps } from "next/app";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="theme-color" content="#ffba44" />
      </Head>

      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
